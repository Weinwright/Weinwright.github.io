# Ekaterina Pushkina — Portfolio

Portfolio website for Ekaterina Pushkina, a Seattle-based GenAI creative
technologist and motion designer.

This repository is public-only. NDA case studies and their media must never be
added here; they live in the separate `private-portfolio` project. The visible
private-work teaser cards link to that site's Cloudflare Access login and do not
contain client media.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run lint
npm run build
```

The production build is exported as a static site in `out/`.

Set `NEXT_PUBLIC_PRIVATE_SITE_URL` at build time if the protected site does not
use the default `https://private.epushkina.com` hostname.

## Deployment

Pushes to `main` are deployed to GitHub Pages by
`.github/workflows/deploy.yml`. A custom domain can be connected in the
repository's Pages settings and pointed to GitHub Pages from GoDaddy DNS.
