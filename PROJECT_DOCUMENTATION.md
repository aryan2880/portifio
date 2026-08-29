# Project Documentation — Portfolio

یہ دستاویز اس پروجیکٹ کی مختصر وضاحت، سیٹ اپ اور ترقیاتی رہنمائی فراہم کرتی ہے۔

## Overview

- **Purpose:** A personal portfolio website showcasing projects, experience, and contact information.
- **Key features:** Home, About, Contact, Work pages, reusable UI components, and 3D scene components under `src/components`.

## Tech Stack

- Next.js (app router)
- TypeScript
- React
- PostCSS (project includes `postcss.config.mjs`)

## Project Structure

- `src/app/` — Next.js app routes and pages (layout, globals.css, page files)
- `src/components/` — Reusable UI components (Hero, Navbar, Projects, Scene3D, etc.)
- `public/` — Static assets
- Configuration: `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`

Example important files:

- [src/app/page.tsx](src/app/page.tsx#L1) — main landing page
- [src/components/Hero.tsx](src/components/Hero.tsx#L1)
- [src/components/Scene3D.tsx](src/components/Scene3D.tsx#L1)

## Setup (Local Development)

Prerequisites:

- Node.js (v16+ recommended)
- npm or yarn

Install dependencies:

```bash
cd portfolio
npm install
```

Run in development mode:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Common Scripts

- `npm run dev` — run Next.js in development
- `npm run build` — create production build
- `npm run start` — start production server after build
- `npm run lint` — run ESLint (if configured)

Check `package.json` for exact script names.

## Development Notes

- Pages live under `src/app/*` using the Next.js app-router conventions.
- Add or update reusable UI in `src/components/` and import them into pages.
- 3D scenes: `Scene3D.tsx` / `PageScene3D.tsx` contain 3D view logic — update carefully and test performance.

## Deployment

- Recommended: Deploy on Vercel (Next.js first-class support).
- Alternatively build with `npm run build` and serve with `npm run start` on any Node host.

## Contribution

- Fork the repo, create a feature branch, implement changes, add tests if applicable, and open a pull request.
- Keep changes focused and document new components or pages.

## License & Contact

- Check repository `README.md` for license information.
- For questions or requests, open an issue or contact the maintainer listed in the repo.

---

اگر آپ چاہیں تو میں اس دستاویز کا مکمل اردو ترجمہ، مزید تفصیل، یا `README.md` میں شامل کرنے کے لئے ایک مختصر خلاصہ بھی بنا دوں۔
