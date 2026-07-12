# Campers (Next.js)

A web application for browsing a campers catalog with filters, a details page, reviews, and a booking form.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- TanStack Query
- Axios
- CSS Modules

## Features

- Campers catalog
- Filtering by:
  - `location`
  - `form`
  - `engine`
  - `transmission`
- Pagination (`Load more`)
- Camper details page
- Reviews
- Booking request

## Requirements

- Node.js 20+
- npm or pnpm

## Quick Start

1. Install dependencies:

```bash
npm install
```

or

```bash
pnpm install
```

2. Create an environment file `.env` (or `.env.local`) in the project root:

```env
NEXT_PUBLIC_BACKEND_URL=https://campers-api.goit.study
```

> Important: no spaces around `=` and no quotes.

3. Start the development server:

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` — run in development mode
- `npm run build` — create a production build
- `npm run start` — start the built app
- `npm run lint` — run ESLint

## Run Production Locally

To verify behavior in production mode:

```bash
npm run build
npm run start
```

## Deployment (Vercel)

1. Add an environment variable in project settings:
   - `NEXT_PUBLIC_BACKEND_URL`
2. Set it for required environments (Production / Preview / Development).
3. Redeploy the project.

> `NEXT_PUBLIC_*` variables are embedded at build time, so any env change requires a new deployment.

## Project Structure (short)

- `app/` — Next.js routes (App Router)
- `components/` — UI and feature components
- `lib/api/` — API services (Axios)
- `lib/utils/` — utilities
- `types/` — TypeScript types

## Notes

- Base API URL is taken from `NEXT_PUBLIC_BACKEND_URL`.
- Catalog route: `/catalog`.
- If an issue appears only in production, test with `build + start`, not only in `dev`.
