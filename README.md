# Quoin Website

Marketing site for [Quoin](https://quoinbuildings.com) — AI operating partner for property and asset management firms.

Built with Next.js 16 (App Router), Tailwind CSS, Magic UI / shadcn primitives, and motion. Deployed on Vercel from the `master` branch.

## Requirements

- Node.js 20.x (see [`.nvmrc`](.nvmrc))
- [pnpm](https://pnpm.io) 9.x

## Getting started

```bash
pnpm install
cp .env.example .env.local   # fill in any values you need locally
pnpm dev
```

The dev server runs on [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Purpose                                       |
| --------------- | --------------------------------------------- |
| `pnpm dev`      | Start the local dev server with HMR           |
| `pnpm build`    | Production build (run before deploying)       |
| `pnpm start`    | Run the production build locally              |
| `pnpm lint`     | ESLint over the repo                          |
| `pnpm exec tsc --noEmit` | Typecheck without emitting files     |

## Project layout

```
app/              Next.js App Router pages and route segments
components/       Reusable UI components (incl. components/ui primitives)
lib/              Shared utilities (cn, etc.)
public/           Static assets (logos, images, fonts referenced by /)
styles/           Global stylesheets (imported via app/globals.css)
docs/             Internal design / spec notes (not shipped)
```

## Environment variables

See [`.env.example`](.env.example) for the full list. All public variables are prefixed `NEXT_PUBLIC_`.

| Variable                  | Required | Purpose                                                      |
| ------------------------- | -------- | ------------------------------------------------------------ |
| `NEXT_PUBLIC_BOOKING_URL` | optional | Override the Google Calendar appointment iframe URL.         |

Production values are configured in the Vercel dashboard, not in this repo.

## Deployment

Pushes to `master` trigger an automatic Vercel build and deploy. CI (GitHub Actions) typechecks, lints, and builds on every push and pull request — see [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

Security headers (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) are configured in [`next.config.mjs`](next.config.mjs).

## Contributing

1. Branch from `master`.
2. Run `pnpm exec tsc --noEmit && pnpm lint && pnpm build` locally before opening a PR.
3. CI must pass. The PR template covers the rest.

## Contact

Questions: [kavins@quoinbuildings.com](mailto:kavins@quoinbuildings.com)
