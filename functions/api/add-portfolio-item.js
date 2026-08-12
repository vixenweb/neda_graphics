/**
 * Cloudflare Pages Function
 * Route: POST /api/add-portfolio-item
 *
 * Receives a new portfolio item (category + title + image) from the admin
 * form and commits it directly to your GitHub repo:
 *   1. Uploads the image to assets/images/gallery/{category}-{NN}.webp
 *   2. Inserts a matching <article> into the gallery grid in index.html
 *   3. Auto-translates the title (fa -> en/ar) with Cloudflare Workers AI
 *   4. Adds the title translation key to main.js for all three languages
 *   5. Bumps the main.js cache-busting version (?v=N) in index.html AND
 *      mirrors it into sw.js, so the update is guaranteed to actually show
 *      up for visitors instead of getting stuck behind a stale cache
 *
 * Since Cloudflare Pages is connected to this GitHub repo, each commit here
 * triggers a normal automatic deployment — nothing else to do by hand.
 *
 * Required environment variables (Cloudflare Pages -> Settings -> Environment
 * variables):
 *   GITHUB_TOKEN   - a GitHub fine-grained PAT with Contents: Read & write
 *                    on this one repo only (mark it "Secret"/encrypted)
 *   GITHUB_OWNER   - your GitHub username or org, e.g. "neda-visuals"
 *   GITHUB_REPO    - the repo name, e.g. "neda-portfolio"
 *   GITHUB_BRANCH  - the branch Cloudflare Pages deploys from, e.g. "main"
 *
 * Also required: an "AI" binding on this Pages project (Settings -> Functions
 * -> AI binding, named exactly "AI") — see SETUP.md.
 */

import { checkBasicAuth, unauthorizedResponse } from '../_shared/basicAuth.js';

const GITHUB_API = 'https://api.github.com';

const CATEGORY_ICONS = {
  logo: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  poster: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  card: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="6" width="19" height="12" rx="2.2" stroke="currentColor" stroke-width="1.3"/><path d="M2.5 10.5h19" stroke="currentColor" stroke-width="1.3"/></svg>',
  animation: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="9" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.3"/><path d="M3 9l1.5-4.5h4L7 9M9 9l1.5-4.5h4L13 9M15 9l1.5-4.5h3.5L19.5 9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

// Reuses the SAME translation keys your filter buttons already use, so the
// tag label ("لوگو" / "Logo" / ...) is guaranteed to exist in all languages
// without needing to invent or guess a new key name for it.
const CATEGORY_FILTER_KEY = {
  logo: 'gallery.filter.logo',
  poster: 'gallery.filter.poster',
  card: 'gallery.filter.card',
  animation: 'gallery.filter.animation',
};

const CATEGORY_LABEL_FA = { logo: 'لوگو', poster: 'پوستر', card: 'کارت ویزیت', animation: 'انیمیشن و ادیت' };

export async function onRequestPost(context) {
  const { request, env } = context;

  // Same password check as the /admin page — the browser normally already
  // sent these credentials once when loading the form, so this should pass
  // silently. Re-checking here means the API itself can never be called
  // without a password, even if someone finds the URL directly.
  const auth = checkBasicAuth(request, env);
  if (!auth.ok) return unauthorizedResponse(auth.configured);

  try {
    const formData = await request.formData();
    const category = String(formData.get('category') || '');
    const title = String(formData.get('title') || '').trim();
    const imageFile = formData.get('image');

    if (!CATEGORY_ICONS[category]) return json({ error: 'دسته‌بندی نامعتبر است.' }, 400);
    if (!title) return json({ error: 'عنوان نمونه‌کار را وارد کنید.' }, 400);
    if (!imageFile || typeof imageFile === 'string') return json({ error: 'تصویر نمونه‌کار انتخاب نشده.' }, 400);
    if (!/\.webp$/i.test(imageFile.name)) {
      return json({ error: 'فایل باید فرمت webp داشته باشد. لطفاً قبل از آپلود، تصویر را به webp تبدیل کنید.' }, 400);
    }

    const { GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH } = env;
    if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
      return json({ error: 'متغیرهای محیطی GitHub تنظیم نشده‌اند (به توسعه‌دهنده اطلاع دهید).' }, 500);
    }
    const branch = GITHUB_BRANCH || 'main';
    const gh = {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'neda-portfolio-admin',
      },
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      branch,
    };

    // ---- 1) Figure out the next available number for this category ----
    const galleryFiles = await githubListDir(gh, 'assets/images/gallery');
    const pattern = new RegExp(`^${category}-(\\d+)\\.webp$`, 'i');
    let maxNum = 0;
    for (const f of galleryFiles) {
      const m = f.name.match(pattern);
      if (m) maxNum = Math.max(maxNum, parseInt(m[1], 10));
    }
    const paddedNum = String(maxNum + 1).padStart(2, '0');
    const imageFileName = `${category}-${paddedNum}.webp`;
    const itemKey = `${category}${paddedNum}`; // e.g. "logo11"

    // ---- 2) Upload the image exactly as provided ----
    const imageBase64 = arrayBufferToBase64(await imageFile.arrayBuffer());
    await githubPutFile(gh, {
      path: `assets/images/gallery/${imageFileName}`,
      contentBase64: imageBase64,
      message: `افزودن نمونه‌کار گالری: ${imageFileName}`,
    });

    // ---- 3) Insert a new <article> into index.html's gallery grid ----
    const webpCount = galleryFiles.filter((f) => /\.webp$/i.test(f.name)).length;
    const paletteIndex = (webpCount % 10) + 1; // cycles through the gm--1..gm--10 palettes
    const indexFile = await githubGetFile(gh, 'index.html');
    const articleHtml = buildArticleHtml({ category, imageFileName, itemKey, paletteIndex, title });
    let updatedIndexHtml = insertIntoGalleryGrid(indexFile.text, articleHtml);

    // ---- 4) Auto-translate the title ----
    const translations = await translateTitle(env.AI, title);

    // ---- 5) Add the title translation key to main.js (fa/en/ar) ----
    const mainJsFile = await githubGetFile(gh, 'main.js');
    const updatedMainJs = insertTitleKey(mainJsFile.text, itemKey, translations);

    // ---- 6) Bump the main.js cache-busting version so the update is never
    //         stuck behind a stale cache — mirrored into index.html + sw.js ----
    const { html: indexWithBumpedVersion, newVersion } = bumpAssetVersion(updatedIndexHtml, 'main.js');
    updatedIndexHtml = indexWithBumpedVersion;

    await githubPutFile(gh, {
      path: 'index.html',
      contentBase64: toBase64(updatedIndexHtml),
      sha: indexFile.sha,
      message: `افزودن آیتم گالری به index.html: ${itemKey}`,
    });

    await githubPutFile(gh, {
      path: 'main.js',
      contentBase64: toBase64(updatedMainJs),
      sha: mainJsFile.sha,
      message: `افزودن کلید ترجمه برای ${itemKey}`,
    });

    if (newVersion) {
      try {
        const swFile = await githubGetFile(gh, 'sw.js');
        const updatedSw = bumpServiceWorker(swFile.text, newVersion);
        await githubPutFile(gh, {
          path: 'sw.js',
          contentBase64: toBase64(updatedSw),
          sha: swFile.sha,
          message: `به‌روزرسانی کش برای main.js?v=${newVersion}`,
        });
      } catch (err) {
        // sw.js might not exist in every deployment of this project — that's
        // fine, the version bump in index.html alone still helps a lot.
      }
    }

    const translatedOk = translations.en !== title || translations.ar !== title;
    return json({
      ok: true,
      message: translatedOk
        ? `نمونه‌کار «${title}» با موفقیت اضافه و به انگلیسی/عربی هم ترجمه شد (${imageFileName}). ظرف چند دقیقه روی سایت قابل مشاهده خواهد بود.`
        : `نمونه‌کار «${title}» اضافه شد (${imageFileName})، اما ترجمه‌ی خودکار انجام نشد — فعلاً نسخه‌ی فارسی در انگلیسی/عربی هم نمایش داده می‌شود. ظرف چند دقیقه روی سایت قابل مشاهده خواهد بود.`,
    });
  } catch (err) {
    return json({ error: 'خطا در پردازش: ' + err.message }, 500);
  }
}

// ==================== GitHub API helpers ====================

async function githubListDir(gh, path) {
  const res = await fetch(`${GITHUB_API}/repos/${gh.owner}/${gh.repo}/contents/${path}?ref=${gh.branch}`, {
    headers: gh.headers,
  });
  if (!res.ok) throw new Error(`خواندن پوشه ${path} ناموفق بود: ${await res.text()}`);
  return res.json();
}

async function githubGetFile(gh, path) {
  const res = await fetch(`${GITHUB_API}/repos/${gh.owner}/${gh.repo}/contents/${path}?ref=${gh.branch}`, {
    headers: gh.headers,
  });
  if (!res.ok) throw new Error(`خواندن فایل ${path} ناموفق بود: ${await res.text()}`);
  const data = await res.json();
  const text = decodeURIComponent(escape(atob(data.content.replace(/\n/g, ''))));
  return { text, sha: data.sha };
}

async function githubPutFile(gh, { path, contentBase64, sha, message }) {
  const body = { message, content: contentBase64, branch: gh.branch };
  if (sha) body.sha = sha;
  const res = await fetch(`${GITHUB_API}/repos/${gh.owner}/${gh.repo}/contents/${path}`, {
    method: 'PUT',
    headers: { ...gh.headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`نوشتن فایل ${path} ناموفق بود: ${await res.text()}`);
  return res.json();
}

function toBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ==================== Translation (Cloudflare Workers AI) ====================

// Translates the Persian title into English and Arabic using Cloudflare's
// built-in Workers AI (no external API key needed). If the AI binding isn't
// configured, or a call fails for any reason, we fall back to the original
// Persian text for that language rather than blocking the whole upload —
// worst case, the client can ask for a manual fix to that one string later.
async function translateTitle(ai, faText) {
  const result = { fa: faText, en: faText, ar: faText };
  if (!ai) return result;

  const targets = [
    { lang: 'en', code: 'en' },
    { lang: 'ar', code: 'ar' },
  ];

  await Promise.all(
    targets.map(async ({ lang, code }) => {
      try {
        const response = await ai.run('@cf/meta/m2m100-1.2b', {
          text: faText,
          source_lang: 'fa',
          target_lang: code,
        });
        if (response && response.translated_text) {
          result[lang] = response.translated_text;
        }
      } catch (err) {
        // Keep the Persian fallback for this language — don't fail the upload.
      }
    })
  );

  return result;
}

// ==================== Content builders ====================

function buildArticleHtml({ category, imageFileName, itemKey, paletteIndex, title }) {
  const icon = CATEGORY_ICONS[category];
  const tagKey = CATEGORY_FILTER_KEY[category];
  const tagLabel = CATEGORY_LABEL_FA[category];
  const safeTitle = escapeHtml(title);
  return `
        <article class="gallery-item" data-category="${category}" tabindex="0">
          <div class="gallery-media gm--${paletteIndex}">
            <img src="assets/images/gallery/${imageFileName}" alt="${safeTitle}" loading="lazy" decoding="async" onerror="this.style.display='none'">
            <span class="media-glyph" aria-hidden="true">
              ${icon}
            </span>
          </div>
          <div class="gallery-caption">
            <span class="gallery-tag" data-i18n="${tagKey}">${tagLabel}</span>
            <h3 data-i18n="gallery.items.${itemKey}.title">${safeTitle}</h3>
          </div>
        </article>`;
}

// Finds the <div id="galleryGrid" ...> ... </div> block and appends the new
// article as its last child, tracking nested <div> depth so it finds the
// CORRECT matching closing tag rather than the first "</div>" it sees.
function insertIntoGalleryGrid(html, articleHtml) {
  const marker = 'id="galleryGrid"';
  const markerIdx = html.indexOf(marker);
  if (markerIdx === -1) throw new Error('div#galleryGrid در index.html پیدا نشد.');

  let cursor = html.indexOf('>', markerIdx) + 1;
  let depth = 1;

  while (depth > 0) {
    const nextOpen = html.indexOf('<div', cursor);
    const nextClose = html.indexOf('</div>', cursor);
    if (nextClose === -1) throw new Error('بستن div گالری پیدا نشد.');

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      cursor = nextOpen + 4;
    } else {
      depth -= 1;
      if (depth === 0) {
        return html.slice(0, nextClose) + articleHtml + '\n      ' + html.slice(nextClose);
      }
      cursor = nextClose + 6;
    }
  }
  throw new Error('نتونستم جای درست رو برای افزودن آیتم گالری پیدا کنم.');
}

// Adds 'gallery.items.{itemKey}.title': '...' right after the last existing
// gallery item title key in each of the fa/en/ar blocks, using the
// AI-translated text for that specific language (see translateTitle above).
//
// NOTE on the block-end pattern: this file's translation object is indented
// with 4 spaces per language block ("    fa: {" ... "    },"), NOT 2 spaces.
// Searching for the wrong indentation would make this function silently
// search the rest of the ENTIRE file instead of just one language's block,
// inserting every new key in the wrong place — verified against the real
// file structure before shipping this.
function insertTitleKey(jsText, itemKey, translations) {
  let updated = jsText;

  for (const lang of ['fa', 'en', 'ar']) {
    const text = (translations[lang] || translations.fa || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    const blockStart = updated.indexOf(`${lang}: {`);
    if (blockStart === -1) continue;
    // Matches both "\n    }," (fa/en, more languages follow) and "\n    }"
    // (ar, the last language, no trailing comma).
    const blockEnd = updated.indexOf('\n    }', blockStart);
    const zoneEnd = blockEnd === -1 ? updated.length : blockEnd;
    const zone = updated.slice(blockStart, zoneEnd);

    const titleKeyMatches = [...zone.matchAll(/'gallery\.items\.[^']+\.title':\s*'[^']*',/g)];
    if (titleKeyMatches.length === 0) continue;

    const last = titleKeyMatches[titleKeyMatches.length - 1];
    const insertPos = blockStart + last.index + last[0].length;
    const newLine = `\n      'gallery.items.${itemKey}.title': '${text}',`;
    updated = updated.slice(0, insertPos) + newLine + updated.slice(insertPos);
  }

  return updated;
}

// ==================== Cache-version bumping ====================

// Bumps "{filename}?v=N" to "{filename}?v=N+1" wherever it appears (normally
// once, in a <link>/<script> tag). Returns the new version number so it can
// be mirrored into sw.js too — this is the fix for the exact bug where
// index.html and sw.js drifted out of sync and visitors got stuck on an old
// cached main.js.
function bumpAssetVersion(html, filename) {
  const re = new RegExp(`(${filename.replace('.', '\\.')}\\?v=)(\\d+)`, 'g');
  let newVersion = null;
  const updatedHtml = html.replace(re, (match, prefix, num) => {
    newVersion = String(parseInt(num, 10) + 1);
    return prefix + newVersion;
  });
  return { html: updatedHtml, newVersion };
}

// Updates sw.js so its own CACHE_VERSION (which controls purging old caches)
// and its precached main.js URL both move forward together with the new
// version number, instead of drifting apart like they did before.
function bumpServiceWorker(swText, newMainJsVersion) {
  let updated = swText.replace(/(main\.js\?v=)(\d+)/, `$1${newMainJsVersion}`);
  updated = updated.replace(/const CACHE_VERSION = 'v(\d+)';/, (match, num) => {
    return `const CACHE_VERSION = 'v${parseInt(num, 10) + 1}';`;
  });
  return updated;
}