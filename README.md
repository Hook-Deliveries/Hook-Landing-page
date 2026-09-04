# Hook — Landing Page

High-converting landing page for **Hook**, a marketplace that digitises open-air
markets. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS 3** (design tokens in `tailwind.config.ts`)
- **next/font** — Space Grotesk (display) + Inter (body)

## Design system

| Token        | Value     | Usage                    |
| ------------ | --------- | ------------------------ |
| `obsidian`   | `#111111` | Dark surfaces / text     |
| `cream`      | `#FAF8F5` | Page background          |
| `brand`      | `#FFD700` | Primary yellow accent    |
| `ember`      | `#FF6B35` | Single warm accent       |
| `ink`        | `#111111` | Text scale (muted/faint) |

Flat, solid colour tokens only — no gradients, no purple/blue glow.

## Getting started

```bash
npm install   # or: pnpm install / yarn install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — lint with ESLint
- `npm run typecheck` — type-check with `tsc`

## Assets

Place media in the following folders and reference them by public path:

- `public/images/` — product shots, posters (e.g. `/images/prices.png`)
- `public/videos/` — looping feature videos (e.g. `/videos/wahala.mp4`)
- `public/gifs/` — animated GIFs, if you prefer GIFs over MP4 loops

The phone mockups in `components/PhoneMockup.tsx` are pure-CSS placeholders so
the page renders without assets; swap in real screenshots when ready.

## Wiring the waitlist

`components/JoinWaitlist.tsx` currently simulates a successful submit. To go
live, replace the simulated `setTimeout` with a real `fetch` to your API route
(e.g. `POST /api/waitlist`) or a form provider.
