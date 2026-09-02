# lettuce.talk

A sample landing page for **lettuce.talk** — a Discord-style community chat app. Four looks, light/dark, and a handful of accent palettes. Toggle them in the bottom-right **Looks** panel (choices stick in the URL and localStorage).

## Looks

| Look | What it is |
| --- | --- |
| **Garden** | Full marketing landing with a product UI preview |
| **Studio** | App-first — you are already in the room |
| **Bento** | Japanese editorial grid (Satoshi + Zen Maru Gothic) |
| **Whisper** | Quiet two-column hero |

Each look has a GitHub button that points at this repo so people can keep up with latest changes: [github.com/joswayski/lettuce](https://github.com/joswayski/lettuce).

## Local

```bash
npm install
npm run dev
```

## Build / deploy

```bash
npm run build
```

The static site lands in `dist/`. Drop that folder on Cloudflare Pages, Netlify, GitHub Pages, or any static host.

Preview the production build with `npm run preview`.
