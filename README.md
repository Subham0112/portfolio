# Portfolio — Full-Stack Developer

A personal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide icons**. Dark-first theme with an optional light mode.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Pages

| Route                  | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| `/`                    | Home — hero, intro, skills strip, featured projects, experience, CTA |
| `/about`               | Background, journey, strengths, education                |
| `/projects`            | Project grid with category filters                       |
| `/projects/[slug]`     | Per-project detail pages (static, pre-generated)         |
| `/experience`          | Internship & freelance experience                        |
| `/skills`              | Categorized skills with levels and context               |
| `/contact`             | Contact form (UI complete, backend is a method hook) + socials |
| `/resume`              | Résumé preview, downloadable via the print dialog        |

## Before applying — replace the placeholders

All content lives in `data/`. Every value enclosed in `[...]` or prefixed `YOUR_` is a placeholder:

- `data/site.ts` — name, email, location, social links (set `NEXT_PUBLIC_SITE_URL` for SEO/OG tags)
- `data/projects.ts` — project details; set `liveUrl` to enable demo buttons
- `data/experience.ts` — roles, companies, dates, responsibilities
- `data/education.ts` — degree, university, coursework
- `data/skills.ts` — skill levels and context lines
- `public/og.svg` — replace with a real 1200×630 PNG (`/og.png`) for social shares

Dates, locations and descriptions in the data files are template examples — make them accurate before applying.

## Notes

- The contact form validates client-side and simulates submission. To make it live, POST the fields to your own route handler or email service from `components/contact/contact-form.tsx`.
- "Download PDF" on `/resume` uses the browser print dialog (choose **Save as PDF**). The document is print-optimized.
- Dark mode is the default and is applied before hydration via an inline script in `app/layout.tsx` — no FOUC.

## Structure

```
app/            routes, layout, template (page transitions), not-found, sitemap, robots
components/     layout/ · ui/ · shared/ · home/ · project/ · contact/ · resume/
data/           all content (never mix UI with content)
lib/            cn() helper + project helpers
```