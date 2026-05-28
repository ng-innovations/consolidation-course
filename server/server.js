/**
 * static-sso-shell
 *
 * Tiny Express server that puts a static directory behind Microsoft Entra ID
 * single sign-on. Designed to drop into any static site's repo and deploy on
 * Railway.
 *
 * Configuration is entirely via env vars — see .env.example.
 */

const path = require('path');
const crypto = require('crypto');
const express = require('express');
const session = require('express-session');
const axios = require('axios');
require('dotenv').config();

// ---- Config ----

const PORT = process.env.PORT || 3000;
const STATIC_DIR = path.resolve(process.cwd(), process.env.STATIC_DIR || './public');
const SITE_TITLE = process.env.SITE_TITLE || 'Site';

const TENANT_ID = process.env.AZURE_TENANT_ID;
const CLIENT_ID = process.env.AZURE_CLIENT_ID;
const CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const SESSION_SECRET = process.env.SESSION_SECRET;

const ALLOWED_EMAIL_DOMAINS = (process.env.ALLOWED_EMAIL_DOMAINS || '')
  .split(',')
  .map(s => s.trim().toLowerCase())
  .filter(Boolean);

const PATH_DENY = (process.env.PATH_DENY || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

const DEV_BYPASS = process.env.DEV_BYPASS === 'true';
const SPA_FALLBACK = process.env.SPA_FALLBACK === 'true';

if (!DEV_BYPASS) {
  const required = { AZURE_TENANT_ID: TENANT_ID, AZURE_CLIENT_ID: CLIENT_ID, AZURE_CLIENT_SECRET: CLIENT_SECRET, REDIRECT_URI, SESSION_SECRET };
  const missing = Object.entries(required).filter(([, v]) => !v).map(([k]) => k);
  if (missing.length) {
    console.error('Missing required env vars: ' + missing.join(', '));
    console.error('Set them, or set DEV_BYPASS=true for unauthenticated local testing.');
    process.exit(1);
  }
}

const AUTH_BASE = `https://login.microsoftonline.com/${TENANT_ID}`;

// ---- App ----

const app = express();
app.set('trust proxy', 1); // Railway terminates TLS upstream

app.use(session({
  name: 'sso.sid',
  secret: SESSION_SECRET || 'dev-secret-do-not-use-in-prod',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 12, // 12 hours
  },
}));

// ---- Helpers ----

function buildAuthorizeUrl(state) {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    response_mode: 'query',
    scope: 'openid profile email User.Read',
    state,
  });
  return `${AUTH_BASE}/oauth2/v2.0/authorize?${params.toString()}`;
}

function emailDomainAllowed(email) {
  if (ALLOWED_EMAIL_DOMAINS.length === 0) return true;
  if (!email) return false;
  const domain = (email.split('@')[1] || '').toLowerCase();
  return ALLOWED_EMAIL_DOMAINS.includes(domain);
}

function denyPaths(req, res, next) {
  const url = req.path;
  for (const pattern of PATH_DENY) {
    if (url === pattern) return res.status(404).send('Not found');
    const prefix = pattern.endsWith('/') ? pattern : pattern + '/';
    if (url.startsWith(prefix)) return res.status(404).send('Not found');
  }
  next();
}

function requireAuth(req, res, next) {
  if (DEV_BYPASS) {
    req.session.user = req.session.user || { email: 'dev@local', name: 'Dev User' };
    return next();
  }
  if (req.session.user) return next();
  // Remember where the user was heading so we can return them after sign-in.
  if (req.method === 'GET') req.session.returnTo = req.originalUrl;
  return res.redirect('/auth/login');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

function renderError(title, detail) {
  return `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(title)}</title>
<style>body{font:14px/1.5 -apple-system,BlinkMacSystemFont,sans-serif;max-width:520px;margin:80px auto;padding:0 16px;color:#1e293b}
h1{font-size:18px;color:#dc2626;margin-bottom:8px}p{margin:8px 0}a{color:#1e40af}</style>
</head><body><h1>${escapeHtml(title)}</h1><p>${escapeHtml(detail)}</p>
<p><a href="/auth/login">Try signing in again</a></p></body></html>`;
}

// ---- Auth routes ----

app.get('/auth/login', (req, res) => {
  const state = crypto.randomBytes(16).toString('hex');
  req.session.oauthState = state;
  res.redirect(buildAuthorizeUrl(state));
});

app.get('/auth/callback', async (req, res) => {
  const { code, state, error, error_description } = req.query;
  if (error) {
    return res.status(401).send(renderError('Sign-in error', `${error}: ${error_description || ''}`));
  }
  if (!code || !state || state !== req.session.oauthState) {
    return res.status(400).send(renderError('Auth state mismatch', 'Please try signing in again.'));
  }
  delete req.session.oauthState;

  try {
    const tokenRes = await axios.post(
      `${AUTH_BASE}/oauth2/v2.0/token`,
      new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: String(code),
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }).toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const accessToken = tokenRes.data.access_token;
    const meRes = await axios.get('https://graph.microsoft.com/v1.0/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const profile = meRes.data;
    const email = profile.mail || profile.userPrincipalName;

    if (!emailDomainAllowed(email)) {
      return res.status(403).send(renderError(
        'Access denied',
        `${email} is not in an allowed domain for ${SITE_TITLE}.`
      ));
    }

    req.session.user = {
      id: profile.id,
      email,
      name: profile.displayName,
    };

    const returnTo = req.session.returnTo || '/';
    delete req.session.returnTo;
    res.redirect(returnTo);
  } catch (err) {
    console.error('Auth callback error:', err.response?.data || err.message);
    res.status(500).send(renderError('Sign-in failed', 'See server logs for details.'));
  }
});

app.get('/auth/logout', (req, res) => {
  const postLogoutRedirect = `${req.protocol}://${req.get('host')}/`;
  req.session.destroy(() => {
    res.clearCookie('sso.sid');
    res.redirect(`${AUTH_BASE}/oauth2/v2.0/logout?post_logout_redirect_uri=${encodeURIComponent(postLogoutRedirect)}`);
  });
});

app.get('/auth/me', (req, res) => {
  let user = req.session.user;
  if (!user && DEV_BYPASS) user = { email: 'dev@local', name: 'Dev User' };
  if (!user) return res.status(401).json({ user: null });
  res.json({ user });
});

// ---- Gate + static serve ----

app.use(requireAuth);
app.use(denyPaths);
app.use(express.static(STATIC_DIR, { extensions: ['html'] }));

if (SPA_FALLBACK) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(STATIC_DIR, 'index.html'), err => {
      if (err) res.status(404).send('Not found');
    });
  });
}

// ---- Startup ----

app.listen(PORT, () => {
  console.log(`static-sso-shell listening on :${PORT}`);
  console.log(`  STATIC_DIR: ${STATIC_DIR}`);
  console.log(`  Auth: ${DEV_BYPASS ? 'DEV_BYPASS (insecure)' : `Microsoft tenant ${TENANT_ID}`}`);
  if (ALLOWED_EMAIL_DOMAINS.length) console.log(`  Allowed domains: ${ALLOWED_EMAIL_DOMAINS.join(', ')}`);
  if (PATH_DENY.length) console.log(`  Denied paths: ${PATH_DENY.join(', ')}`);
  if (SPA_FALLBACK) console.log('  SPA fallback: enabled');
});
