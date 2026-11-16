# Project Specs: Aadhaar Goel — Developer Portfolio

## What the app does and who uses it

A single-page developer portfolio for **Aadhaar Goel**, Backend & AI engineer and B.Tech Data Science & AI
student at IIT Guwahati (2023 – 2027 expected).

**Sole goal: land a software engineering internship.** The site is for internships only — no full-time,
freelance, or client-services messaging anywhere.

Target audience, in priority order:
1. **Recruiters** — skim for role fit, availability, resume, contact
2. **Hiring managers / tech leads** — check depth: real systems, real metrics
3. **Interviewers** — verify DSA/CP credentials and engineering judgement

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS + CSS custom properties (`--l-*` design tokens)
- **Animations:** Framer Motion
- **Fonts:** Bricolage Grotesque (display), IBM Plex Sans (body), JetBrains Mono (mono)
- **Icons:** Lucide React
- **Deployment:** Vercel (auto-deploys on push to `master`)

## Structure

Single-page app (`/`) with a client-side view switcher (`components/SpaShell.tsx`). Four tabs:

1. **Home** — hero (availability badge, Resume + GitHub CTAs), expertise list, tech stack, how I work, experience, contact CTA
2. **Work** — project cards with tech, impact, and metrics
3. **Code** — competitive programming profiles (LeetCode, Codeforces) via live API routes
4. **Blogs** — technical writing, with a detail view per post

## Data

All content is static in `lib/data.ts` (no database/CMS). Long-form blog bodies live in `lib/blog-content.ts`.

## Source of truth

**The resume (`public/resume.pdf`, Nov 2026 version) is the source of truth.** Every fact, metric, skill,
date, and project on the site must match it. Anything not on the resume is removed.

## Positioning rules

- Availability copy says **"Open to internships"** only — never "full-time", "roles from 2027", or "senior"
- Framing is "projects and production work" — never "clients", "freelance", or "consulting"
- Job titles are copied exactly from the resume
- Never claim a skill the resume does not list

## This task: internship-only + resume sync

| Area | Change |
|---|---|
| Availability | "Open to internships" in hero badge, CTA, and page metadata; all full-time wording removed |
| Person | Tagline = resume summary; location "Bengaluru, India" |
| Education | B.Tech Data Science & AI, IIT Guwahati, 2023 – 2027 (Expected), CGPA **8.34** (was 8.4 / B.Sc.) |
| Stats | 1500+ DSA problems · 8.34 CGPA · 3 industry internships · 4,400+ automated tests |
| Experience | **Tattva Education Technologies** — Software Engineer Intern, Sep 2026 – Present (new, current) · **Physics Wallah** — Backend Developer Intern, Feb – Aug 2026 (no longer current) · **Summentors PRO** — Tech & Growth Solutions *Intern*, Mar – Jul 2026 · metrics/bullets rewritten from resume |
| Projects | **AI Test Automation Platform** (acquired; new, featured first) · **Multi-Tenant CBT Platform** · **Payment Wallet** (4 Spring Boot services over Kafka) · **UrbanSole** (AI copilot, RAG, Qdrant, 933 users) — all rewritten from resume |
| Skills / marquee | Exactly the resume skill list (adds Fastify, Qdrant, Next.js, Playwright, Appium, OWASP ZAP, mutation testing, tool calling, ECR; drops NestJS, gRPC, MongoDB, Prometheus, Grafana, Amplify, AI proctoring/voice bots) |
| Hero cards | "Currently at Tattva", LeetCode 1837, IIT Guwahati 8.34 |
| Expertise list | Rewritten so every claim is on the resume (no gRPC, NestJS, Prometheus, "40% latency") |
| Achievements | Hackathon: 1st of 53 teams, PW Institute of Innovation, agritech IoT · CP: Codeforces Specialist 1409, LeetCode 1837 |
| Resume file | You replace `public/resume.pdf` with the new PDF (I can't save the attached file for you) |

### Follow-up task: product-engineering "How I work"

Rewrite the 4 "How I work" steps (`HOW_I_WORK` in `lib/data.ts`) so they show a product-engineering approach:
start from user pain points (as at Tattva), shape the smallest fix, build UX + backend end to end, then ship,
measure, and iterate (as with Mixpanel funnels at Summentors PRO). Same 4-step layout, same icons slot count;
only the text and the first icon change. Done = build passes and the section shows the new steps.

Open decisions (answered before build): projects/experience not on the resume, and blog posts whose numbers
disagree with the resume.

## Third-party services

- Vercel (hosting), LeetCode + Codeforces public APIs (via `/app/api/lc`, `/app/api/cf`)
- No auth, no database, no payments

## What "done" looks like

- [ ] No "full-time" wording anywhere on the site or in metadata
- [ ] Every fact on the site matches the Nov 2026 resume
- [ ] `npm run build` passes with zero errors
- [ ] Dev server runs; Home and Work pages load with no console errors
- [ ] `public/resume.pdf` replaced with the new resume (your step)
