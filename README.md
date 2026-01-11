# Datlamo — Production-ready demo site

A simple Next.js (App Router) TypeScript site demonstrating a minimal e-commerce flow for one-time data purchases. This repository is an MVP prototype for Datlamo — a marketplace for high-quality, one-time datasets.

**Used tech stack**
- Next.js (App Router)
- TypeScript
- Tailwind CSS

**Project structure**
- `/app` — App Router pages and `layout.tsx`
  - `layout.tsx` — root layout with shared header/footer
  - `page.tsx` — homepage
  - `/produkty` — products listing
    - `/fitness-praha-2025` — product detail
  - `/o-nas` — about
  - `/kontakt` — contact form
  - `/checkout` — checkout skeleton
  - `/po-zaplaceni` — post-payment landing
- `/components` — React components: `Header.tsx`, `Footer.tsx`, `Section.tsx`, `Card.tsx`
- `/styles/globals.css` — Tailwind entry and base styles

**How to run locally**

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

Open http://localhost:3000

**Current status**

MVP / active development — basic site, responsive layouts, and checkout structure. No external data fetching or live payment integration is included.
