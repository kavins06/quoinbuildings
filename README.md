# QUOIN Website

QUOIN is an AI implementation and governance advisory firm for property management companies. This is the marketing website.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS v4
- **Database:** Supabase (contact form submissions)
- **Deployment:** Vercel
- **Typography:** Manrope Variable, Instrument Serif, IBM Plex Mono

## Project Structure

- `src/content/site.ts` — All site content (types + exported objects)
- `src/app/` — Next.js App Router pages
- `src/components/` — Presentational React components
- `src/app/globals.css` — CSS custom properties, animations, utilities
- `src/app/api/partner-inquiry/` — Contact form API route
- `supabase/migrations/` — Database migrations

## Scripts

- `npm install` — Install dependencies
- `npm run dev` — Start the development server
- `npm run build` — Create a production build
- `npm run lint` — Run ESLint
