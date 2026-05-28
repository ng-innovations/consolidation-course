# Consolidation Course

A developer onboarding curriculum on financial report consolidation.

Static HTML — no build step at serve time. Open `index.html` to browse locally.

## Hosting

The course is served on Railway behind a Microsoft Entra ID single sign-on gate. The Express server lives in `server/` and is a copy of [`static-sso-shell`](../static-sso-shell). `STATIC_DIR=..` points it at the repo root so the existing HTML/CSS/JS files are served as-is; `PATH_DENY` hides internal files (`server/`, `design/`, `claude.md`, etc.) that shouldn't be public.

Required env vars on the Railway service are listed in `server/.env.example`. To run locally with auth bypassed:

```sh
cd server
cp .env.example .env
# Set DEV_BYPASS=true in .env
npm install
npm run dev
```

When the shared shell is updated upstream, re-copy `static-sso-shell/src/server.js` into `server/server.js`.

## Contributing

See [`claude.md`](./claude.md) for writing rules, repo layout, and the edit workflow.
