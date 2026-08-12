/**
 * Cloudflare Pages Function middleware.
 * Applies automatically to every request under /admin/* (including the
 * static admin/index.html page) — the browser will show its native
 * username/password prompt before letting anyone see the form.
 */
import { checkBasicAuth, unauthorizedResponse } from '../_shared/basicAuth.js';

export async function onRequest(context) {
  const { request, env, next } = context;
  const { ok, configured } = checkBasicAuth(request, env);

  if (!ok) return unauthorizedResponse(configured);

  return next();
}