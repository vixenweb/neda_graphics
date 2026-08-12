/**
 * Shared HTTP Basic Auth helper.
 *
 * Used instead of Cloudflare Access (Zero Trust), since Zero Trust asks for
 * account/billing details during setup that aren't available to Iranian
 * accounts. Basic Auth needs nothing beyond two normal Cloudflare Pages
 * environment variables (same as GITHUB_TOKEN) and is fully supported
 * natively by every browser — no extra service, no account, no cost.
 *
 * Set these two environment variables in Cloudflare Pages -> Settings ->
 * Environment variables:
 *   ADMIN_USERNAME  - any username you choose (not secret, just an ID)
 *   ADMIN_PASSWORD  - a strong password (mark this one "Secret"/encrypted)
 */

export function checkBasicAuth(request, env) {
  const expectedUser = env.ADMIN_USERNAME;
  const expectedPass = env.ADMIN_PASSWORD;

  if (!expectedUser || !expectedPass) {
    return { ok: false, configured: false };
  }

  const authHeader = request.headers.get('Authorization') || '';
  const [scheme, encoded] = authHeader.split(' ');
  if (scheme !== 'Basic' || !encoded) {
    return { ok: false, configured: true };
  }

  let decoded = '';
  try {
    decoded = atob(encoded);
  } catch (err) {
    return { ok: false, configured: true };
  }

  const separatorIndex = decoded.indexOf(':');
  const user = decoded.slice(0, separatorIndex);
  const pass = decoded.slice(separatorIndex + 1);

  const ok = user === expectedUser && pass === expectedPass;
  return { ok, configured: true };
}

export function unauthorizedResponse(configured) {
  if (!configured) {
    return new Response(
      'پنل مدیریت هنوز راه‌اندازی نشده — متغیرهای ADMIN_USERNAME و ADMIN_PASSWORD در Cloudflare Pages تنظیم نشده‌اند.',
      { status: 500 }
    );
  }
  return new Response('برای دسترسی به این صفحه، نام کاربری و رمز عبور لازم است.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="پنل مدیریت ندا", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}