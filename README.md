# lettuce.talk

The landing page for [lettuce.talk](https://lettuce.talk): a more personal,
customizable home for communities.

## Development

```sh
npm install
npm run dev
```

## Cloudflare Pages

This is a TanStack Start app configured to prerender the landing page at build
time. In Cloudflare Pages, use:

- Build command: `npm run build`
- Build output directory: `dist/client`

The static output includes the homepage and sitemap, with no runtime server or
environment variables required.
