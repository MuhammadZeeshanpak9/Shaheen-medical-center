# Shaheen Medical Center — Website

Marketing website for Shaheen Medical Center, a polyclinic in Islamabad, Pakistan.
Built by Aurorix Tech.

## Tech stack

- **Next.js** (App Router, TypeScript, `src/` directory, `@/*` import alias)
- **Tailwind CSS v4** (CSS-first config via `@theme` in `globals.css`)
- **Framer Motion** — scroll reveals, stagger, hover/tap micro-interactions, page transitions
- **three / @react-three/fiber / @react-three/drei** — WebGL / 3D hero scene work
- **GSAP** — used selectively for scroll-linked timelines Framer Motion can't cleanly express (e.g. an ECG line drawing tied to scroll position), not used globally
- **clsx** — conditional className composition (via `cn()` in `lib/utils.ts`)
- **lucide-react** — icon set for UI icons outside custom medical iconography
- **ESLint**, **Prettier** + `prettier-plugin-tailwindcss` — linting and formatting

## Folder structure

```
src/
  app/
    layout.tsx          root layout — fonts, metadata, Navbar/Footer
    page.tsx             home
    about/page.tsx
    services/page.tsx
    doctors/page.tsx
    contact/page.tsx
  components/
    layout/              Navbar, Footer
    ui/                   shared small components (Button, Card, SectionHeading, etc.)
    motion/                shared Framer Motion wrapper components (RevealOnScroll, StaggerGroup, etc.)
    three/                 React Three Fiber components (HeroScene, BloodCellField, etc.)
  lib/
    constants.ts          site-wide content constants (clinic info, nav links, service list)
    utils.ts               cn() className helper
  app/globals.css          Tailwind layers + design token CSS variables
```

## Running the dev server

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Design tokens

### Colors

| Token        | Hex       | Usage                                          |
| ------------ | --------- | ----------------------------------------------- |
| `navy`       | `#0A2A4D` | Headings, footer background, deep sections       |
| `blue`       | `#0B5FA8` | Primary actions, links, icons                    |
| `blue-light` | `#4FA8DA` | Secondary accents, gradients                     |
| `sky`        | `#EAF4FC` | Section backgrounds, alternates with white       |
| `teal`       | `#1CA9A0` | Signature accent (ECG/pulse motif only, sparing) |
| `ink`        | `#14213A` | Body text                                        |
| `ink-soft`   | `#4A5B72` | Secondary/muted text                             |
| `line`       | `#D8E6F2` | Borders, dividers                                |

Use as Tailwind utilities: `bg-navy`, `text-sky`, `border-line`, etc.

### Fonts

| Token     | Font           | Weights             | Usage                                    |
| --------- | -------------- | -------------------- | ----------------------------------------- |
| `display` | Fraunces       | 400, 500, 600, 700    | Headlines only, used with restraint       |
| `body`    | Manrope        | 400, 500, 600, 700, 800 | All body copy and UI text              |
| `mono`    | IBM Plex Mono  | 400, 500              | Eyebrow labels, small data/stat text only |

Use as Tailwind utilities: `font-display`, `font-body`, `font-mono`.

Fonts are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS
variables (`--font-display`, `--font-body`, `--font-mono`), which are wired into the
Tailwind theme via `@theme inline` in `src/app/globals.css`.
