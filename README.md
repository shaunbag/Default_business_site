# Business Site Frontend (React + TypeScript + Vite)

This repository is a small marketing/business site built with React, TypeScript and Vite. It provides a splash/landing experience, a multi-section home page, and a few UI modals/components used for navigation and simple interactions.

## Key Functionality

- Routing: client-side routes using `react-router-dom` — `/` (Splash) and `/home` (Home).
- Splash page: shows a rotating motivational quote fetched from an external API and a mailing-list form that uses EmailJS (`@emailjs/browser`).
- Home page: anchor-linked sections — `Home`, `Mission`, `About`, `Contact` — reachable from the `NavBar` and `MenuModal`.
- About section: includes a `Swiper` carousel for slide content.
- Contact section: a simple contact form (client-side only; no server configured by default).
- UI components: `NavBar`, `LoginModal`, `MenuModal`, `Footer` and reusable CSS in `src/styles/`.
- Basic API helpers: `src/utils/api/api.ts` contains example (commented) fetch helpers and a `VITE_SERVER_URL` placeholder for backend calls.

Assets live in `src/assets` and `public/assets` for images and SVGs used by the UI.

## Project Structure (important files)

- `src/App.tsx` — route definitions for the app.
- `src/pages/Splash.tsx` — landing page with EmailJS form and quote fetch.
- `src/pages/Home.tsx` — main site composed of `Mission`, `About`, `Contact` and `Footer`.
- `src/components/NavBar.tsx` — top navigation; opens modals for mobile or login.
- `src/components/LoginModal.tsx` & `src/components/MenuModal.tsx` — UI-only modals for login and mobile navigation.
- `src/utils/api/api.ts` — commented API helpers and `VITE_SERVER_URL` usage notes.

## Scripts

Available npm scripts (see `package.json`):

- `dev` — start Vite dev server (`npm run dev`).
- `build` — TypeScript build followed by Vite build (`npm run build`).
- `preview` — preview the production build (`npm run preview`).
- `lint` — run ESLint across the codebase (`npm run lint`).

## Environment variables

The project uses the following environment variables for optional features:

- `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, `VITE_PUBLIC_KEY` — used by EmailJS in `src/pages/Splash.tsx` for mailing list submissions.
- `VITE_SERVER_URL` — used as a base for the commented API helpers in `src/utils/api/api.ts` if you wire a backend later.

Place these in a `.env` file at the project root (prefixed with `VITE_`) for local development.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open `http://localhost:5173` (Vite's default) in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Notes & Next steps

- Email sending on the splash page requires EmailJS keys — add the `VITE_` variables listed above.
- The contact form is currently client-side only. If you need server-side processing, implement an endpoint and update `src/utils/api/api.ts` and the form handlers.
- Routing is minimal — current routes are `/` and `/home`. Anchor links navigate within the home page sections.

If you want, I can also:

- Add README badges (build, license, etc.).
- Document environment variable setup with a sample `.env.example`.
- Wire the contact form to a backend and enable validations.

