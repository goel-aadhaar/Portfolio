# Project Specs: Aadhaar Goel — Developer Portfolio

## What the app does and who uses it

A single-page developer portfolio for **Aadhaar Goel**, Software Engineer and CS student at IIT Guwahati (Class of 2027).

**Primary goal: land a software / DevOps / infrastructure internship now, and a full-time role from 2027.**

Positioned as a **software engineer** — not backend-only. The site should read equally well to a
software, DevOps, infrastructure, or cloud/SRE recruiter.

Target audience, in priority order:
1. **Recruiters** — skim for role fit, availability, resume, contact
2. **Hiring managers / tech leads** — check depth: real systems, real scale, real metrics
3. **Interviewers** — verify DSA/CP credentials and engineering judgement

Everything on the site serves that goal. There is **no freelance or client-services positioning** — past work is presented as **projects and production work**, not client engagements.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS + CSS custom properties (`--l-*` design tokens)
- **Animations:** Framer Motion (view transitions, hover, scroll reveals)
- **Fonts:** Bricolage Grotesque (display), IBM Plex Sans (body), JetBrains Mono (mono)
- **Icons:** Lucide React
- **Deployment:** Vercel (auto-deploys on push to `master`)

## Structure

Single-page app (`/`) with a client-side view switcher (`components/SpaShell.tsx`).
Four tabs — **no Freelance tab**:

1. **Home** — hero (availability badge, Resume + GitHub CTAs), capability bento, tech stack, how I work, experience, FAQ, contact CTA
2. **Work** — "Projects built for production": 6 project cards with tech, impact, and scale metrics
3. **Code** — competitive programming profiles (LeetCode, Codeforces) via live API routes
4. **Blogs** — technical writing, with a detail view per post

## Data

All content is static in `lib/data.ts` (no database/CMS):
`PERSON`, `STATS`, `PROJECTS`, `EXPERIENCE`, `SKILLS`, `MARQUEE_*`, `BLOGS`, `HOW_I_WORK`, `FAQS`, `CF_RATING_HISTORY`, `ACHIEVEMENTS`, `EDUCATION`.
Long-form blog bodies live in `lib/blog-content.ts`.

## Positioning rules (important)

- Framing is **"projects and production work"** — never "clients", "freelance", "engagements", or "consulting"
- Title is **"Software Engineer"** — do not narrow the site's positioning to "Backend Engineer".
  (The Physics Wallah job title "Backend Developer Intern" stays as-is — it's a factual job title.)
- Target roles are **software, DevOps, and infrastructure** — surface cloud/infra evidence
  (AWS, Docker, Linux) as prominently as the API/services work
- Availability copy must say **internships + full-time from 2027** — never "senior/staff roles"
- Every project should carry a **concrete metric** (latency, concurrency, throughput, scale)
- **Never claim a skill with no evidence** on the resume (`public/resume.pdf`) — it will not
  survive an interview screen. The resume is the source of truth for skills and facts;
  when the two disagree, the resume wins.
- Confirmed by the resume and safe to feature: Kubernetes, Prometheus, Grafana, AWS Lambda,
  Python, React, AI proctoring/evaluation. Not evidenced: Terraform, CI/CD tooling by name.

## Third-party services

- Vercel (hosting), LeetCode + Codeforces public APIs (via `/app/api/lc`, `/app/api/cf`)
- No auth, no database, no payments

## What "done" looks like

- [x] Build passes with zero TypeScript errors (`npm run build`)
- [x] Dev server runs with no console/runtime errors
- [x] All freelance/client content removed (page, nav, data, stats, FAQ, CTA)
- [x] Projects retained and framed as production work
- [x] Site positioned for internships + full-time roles (hero, FAQ, CTA, metadata)
- [x] Resume button in hero and contact CTA
- [ ] **`public/resume.pdf` added** — button 404s until the PDF is dropped in
- [x] Deployed to Vercel
