# Aryan Verma — Portfolio

> A modern, multi-page portfolio website built with **Next.js**, **Three.js**, and **Framer Motion**. Features a raw editorial design, dark theme by default, 3D animated backgrounds, and a floating WhatsApp button.

**Live demo:** [View Portfolio](https://aryan2880.github.io/portfio/)

---

## Tech Stack

- **Framework:** Next.js 16 (Static Export)
- **3D Graphics:** Three.js + React Three Fiber + Drei
- **Animations:** Framer Motion
- **Styling:** CSS Variables + Tailwind CSS
- **Fonts:** Space Grotesk + IBM Plex Mono + Inter

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, About strip, Featured Work, Capabilities, Live Websites |
| `/about` | About — Bio, Fast Facts, Values, Experience Timeline, Education |
| `/work` | Work — Technical Projects + Live Websites (14 deployed sites) |
| `/contact` | Contact — Direct links, Quick Actions, WhatsApp CTA |

## Features

- 🌙 Dark theme by default (light mode toggle available)
- 🎮 Three.js 3D animated background (floating spheres, tori, particles)
- 📱 Fully responsive (mobile hamburger menu, stacked layouts)
- 💬 Floating WhatsApp button on all pages
- ✨ Scroll-triggered Framer Motion animations
- 🎨 Raw editorial / brutalist design — no AI template look
- 📊 Static export — deploy anywhere (GitHub Pages, Vercel, Netlify)

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** 9+ (or yarn/pnpm)

### Install Dependencies

```bash
cd portfolio
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

The static output will be generated in the `out/` directory.

### Preview Production Build

```bash
npm run build && npx serve out
```

---

## Deployment

### GitHub Pages

1. Push to GitHub:
   ```bash
   git remote add origin https://github.com/aryan2880/portfio.git
   git push -u origin master
   ```

2. The `out/` directory contains the static build ready to deploy.

3. **Option A — GitHub Actions (Recommended):**

   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy Portfolio
   on:
     push:
       branches: [master]
   jobs:
     build-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: out
         - uses: actions/deploy-pages@v4
   ```

   Then enable GitHub Pages in repo settings → Source → GitHub Actions.

4. **Option B — Manual deploy:**
   ```bash
   npm run build
   npx gh-pages -d out
   ```

### Vercel

```bash
npx vercel --prod
```

Vercel auto-detects Next.js. No config needed.

### Netlify

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `out`

---

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles, CSS variables, responsive
│   │   ├── layout.tsx         # Root layout with ThemeProvider
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About page
│   │   ├── work/page.tsx      # Work page (projects + portfolio)
│   │   └── contact/page.tsx   # Contact page
│   └── components/
│       ├── ThemeProvider.tsx   # Dark/Light theme context
│       ├── Scene3D.tsx        # Three.js 3D background
│       ├── Navbar.tsx         # Navigation with mobile menu
│       ├── Footer.tsx         # Footer with marquee + links
│       └── WhatsAppButton.tsx # Floating WhatsApp CTA
├── next.config.ts        # Next.js configuration (static export)
├── tailwind.config.ts    # Tailwind CSS configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

---

## Customization

### Change Personal Info

Edit `src/app/page.tsx` for the home page content, `src/app/about/page.tsx` for bio/experience, `src/app/work/page.tsx` for projects and portfolio sites, and `src/app/contact/page.tsx` for contact links.

### Change Theme Colors

Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --accent: #e63946;  /* Change this for a different accent color */
  --bg: #f5f0eb;      /* Light mode background */
  /* ... */
}

[data-theme="dark"] {
  --bg: #0d0d0d;       /* Dark mode background */
  --accent: #ff4d5a;   /* Dark mode accent */
  /* ... */
}
```

### Change WhatsApp Number

Search for `919304453760` across the codebase and replace with your number (format: `countrycode + number`).

---

## License

Built by Aryan Verma. All rights reserved.
