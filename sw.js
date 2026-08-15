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

const CACHE_VERSION = 'v10';
const CACHE_NAME = `neda-portfolio-${CACHE_VERSION}`;

// Core files needed for the site shell. Everything else (gallery images,
// fonts, etc.) gets cached automatically the first time it's requested.
const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css?v=4',
  './main.js?v=6',
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

  const url = new URL(request.url);
  const isAppShell = isHTMLRequest(request) || url.pathname.endsWith('.css') || url.pathname.endsWith('.js');

  // CSS/JS now get the SAME "always try the network first" treatment as HTML.
  // This is a deliberate safety net: this site's caching has broken before
  // when a version-query-string bump in index.html didn't get mirrored into
  // this file's PRECACHE_URLS, leaving visitors stuck on an old cached
  // version even after a hard refresh. Network-first means that class of bug
  // can't happen again — an online visitor always gets the current file.
  // Images/video/fonts still use stale-while-revalidate, which is safe for
  // them because new gallery uploads always get a brand-new filename
  // (logo-11.webp, never logo-01.webp overwritten), so there's nothing to
  // go stale.
  if (isAppShell) {
    event.respondWith(networkFirst(request));
  } else {
    event.respondWith(staleWhileRevalidate(request));
  }
});