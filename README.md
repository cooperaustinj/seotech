# SEO Tech Monorepo

Bun + Turborepo + Vite monorepo for a simple, one-page informational site.

## Workspace layout

- `apps/web`: React SPA
- `packages/typescript-config`: shared TypeScript presets

## Commands

```bash
bun install
bun dev
bun check-types
bun build
```

## Cloudflare Pages SPA routing

`apps/web/public/_redirects` is configured as:

```txt
/* /index.html 200
```

## Cloudflare deployment (Wrangler)

Wrangler config lives at `apps/web/wrangler.jsonc`.

Deploy commands:

```bash
bun run deploy:web
# or from apps/web
bun run deploy
```

## Before going live

Update placeholders in `apps/web/src/App.tsx`:

- legal business name
- contact email
- optional phone
- location
- final policy wording
