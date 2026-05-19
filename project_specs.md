# Project Specs: Aadhaar Goel — Developer Portfolio

## What the app does and who uses it

A single-page developer portfolio for **Aadhaar Goel**, Backend / Full Stack Engineer.
Target audience: hiring managers, recruiters, and technical leads at developer-tools companies.
The site showcases projects, work experience, tech stack, and provides a contact CTA.

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS + CSS custom properties (Aadhaar Interactive UI design tokens)
- **Animations:** GSAP + ScrollTrigger (scroll-driven reveals, stagger, parallax), Framer Motion (hover, load, micro-interactions)
- **Fonts:** Geist Sans, Geist Mono (via `next/font/google`), Fraunces (via Google Fonts)
- **Icons:** Lucide React
- **Deployment:** Vercel

## Pages and Sections (single-page)

All sections live on one page (`/`):

1. **Nav** — floating glassmorphism pill, fixed top, scroll-aware background
2. **Hero** — name, title, tagline, CTAs, stats bar, abstract portrait card, GSAP intro timeline
3. **About** — quote, bio, 2×2 capability grid, marquee tech ticker
4. **Projects** — 3 featured + 2 secondary case-study cards with tech + impact
5. **Experience** — 3 job entries with company, role, dates, bullets
6. **Skills** — categorised tech stack chips + "currently exploring" band
7. **Contact** — centered CTA with email button and social links
8. **Footer** — logo, copyright, nav links, version

## Design System

Based on **Aadhaar Interactive UI** (design bundle from claude.ai/design):
- Dark canvas: `#0a0a0a`, elevated cards: `#141414`
- Primary accent: `#5b3afd` (indigo-violet)
- Text: `#fafafa` / `#a09d96` (soft)
- Fonts: Geist Sans 400–700, Geist Mono 400–600, Fraunces (serif accent)
- 4px spacing base, 12px radius cards, pill buttons

## Data

All content lives in `lib/data.ts` — no database or CMS needed.
Person details, stats, projects, experience, and skills are all static.

## What "done" looks like

- [x] Build passes with zero TypeScript errors
- [x] Dev server runs clean with no console errors
- [x] All 6 sections rendered correctly
- [x] GSAP scroll animations fire on section entry
- [x] Framer Motion hover effects on cards, buttons, nav
- [x] Responsive: stacks to single column on mobile
- [ ] Deployed to Vercel
