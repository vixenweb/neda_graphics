/* ==========================================================================
   ندا | پورتفولیو طراح گرافیک — sw.js (Service Worker)
   Gives the site real browser-level caching so repeat visits (and
   navigating between sections) feel instant, without needing any
   server/hosting configuration.

   Strategy:
   - HTML pages:      network-first, falling back to cache (so visitors
                       always get the latest content when online, and the
                       site still loads if the connection drops).
   - CSS/JS/fonts/
     images/video:     stale-while-revalidate — serve instantly from cache,
                       then quietly fetch a fresh copy in the background
                       for next time. This is what makes the site feel
                       fast on the 2nd, 3rd, ... visit.

   Bump CACHE_VERSION any time you want to force everyone's cache to
   fully reset (e.g. after a big redesign).
   ========================================================================== */

const CACHE_VERSION = 'v4';
const CACHE_NAME = `neda-portfolio-${CACHE_VERSION}`;

// Core files needed for the site shell. Everything else (gallery images,
// fonts, etc.) gets cached automatically the first time it's requested.
const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css?v=3',
  './main.js?v=3',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).catch(() => {
      /* no-op: if precaching fails (e.g. offline install), fetch handler still works */
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith('neda-portfolio-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

const isHTMLRequest = (request) =>
  request.mode === 'navigate' ||
  (request.headers.get('accept') || '').includes('text/html');

// Network-first: try the network, fall back to whatever's cached.
const networkFirst = async (request) => {
  try {
    const fresh = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, fresh.clone());
    return fresh;
  } catch (err) {
    const cached = await caches.match(request);
    return cached || Response.error();
  }
};

// Stale-while-revalidate: answer instantly from cache if we have it,
// while updating the cache in the background for the next visit.
const staleWhileRevalidate = async (request) => {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const networkFetch = fetch(request)
    .then((response) => {
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);

  return cached || (await networkFetch) || Response.error();
};

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests — POSTs (like the consultation form to
  // Formspree) must always go straight to the network untouched.
  if (request.method !== 'GET') return;

  // Let cross-origin requests (Google Fonts, the Three.js CDN, Formspree, etc.)
  // pass through with the same stale-while-revalidate benefit, but never let a
  // failed cross-origin fetch break the page.
  if (isHTMLRequest(request)) {
    event.respondWith(networkFirst(request));
  } else {
    event.respondWith(staleWhileRevalidate(request));
  }
});