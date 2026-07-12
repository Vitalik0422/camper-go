# TravelTrucks Campers

Frontend application for the **TravelTrucks** camper rental service.
The app is built with **Next.js App Router + TypeScript** and implements the required 3 pages: home, campers catalog, and camper details.

## Project Links

- Repository: `add-your-repository-link-here`
- Live demo (Vercel/Netlify): `add-your-deploy-link-here`
- Design mockup: provided by course/mentor (private link)
- Backend docs: provided by course/mentor (private link)

## Main Functionality

### Home page (`/`)

- Hero section with CTA button **View Now**.
- Navigation to the catalog page.

### Catalog page (`/catalog`)

- Fetches campers list from backend.
- Backend filtering via query params:
  - `location`
  - `form` (single choice)
  - `engine` (single choice)
  - `transmission` (single choice)
- Pagination with **Load More** (4 cards per request).
- Keeps active filters while loading next pages.
- **Show more** opens camper details in a new browser tab.

### Camper details page (`/catalog/[camperId]`)

- Full camper information.
- Image gallery.
- Reviews list with 5-star rating UI.
- Booking form that sends data to backend.
- Success/error toast notifications for booking request.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- TanStack Query (including `useInfiniteQuery`)
- Axios
- CSS Modules
- Sonner (notifications)
- Swiper (gallery)

## Getting Started

### 1. Prerequisites

- Node.js 20+
- npm or pnpm

### 2. Install dependencies

Using npm:

```bash
npm install
```

Using pnpm:

```bash
pnpm install
```

### 3. Configure environment variables

Create `.env` or `.env.local` in the project root:

```env
NEXT_PUBLIC_BACKEND_URL=your-backend-base-url
```

Example: `https://your-api-domain.com`

### 4. Run development server

```bash
npm run dev
```

Open: http://localhost:3000

## Available Scripts

- `npm run dev` - run app in development mode
- `npm run build` - create production build
- `npm run start` - run production build
- `npm run lint` - run ESLint

## Production Check (recommended before submit)

```bash
npm run build
npm run start
```

## API Endpoints Used

- `GET /campers`
- `GET /campers/filters`
- `GET /campers/{camperId}`
- `GET /campers/{camperId}/reviews`
- `POST /campers/{camperId}/booking-requests`

Base URL is read from `NEXT_PUBLIC_BACKEND_URL`.

## Project Structure

- `app/` - routes and page-level composition (App Router)
- `components/` - reusable UI and feature components
- `lib/api/` - axios instance and API services
- `lib/utils/` - helper functions
- `types/` - shared TypeScript types
- `providers/` - app providers (TanStack Query)

## Author

- Name: Vitalii Beniuk
- Email/contacts: `vitaliy19980422@gmail.com`

## Notes for Review

- The project follows the assignment requirements for routing, filtering, pagination, details page, gallery, and booking workflow.
- If behavior differs between dev and prod, validate using `build + start`.
