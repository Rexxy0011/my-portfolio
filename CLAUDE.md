# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project layout

The git repo root is `portfolio-v3/`, but the actual application lives in the [my-project/](my-project/) subdirectory. All npm scripts must be run from there:

```bash
cd my-project
npm install
npm run dev      # Vite dev server with HMR
npm run build    # Production build to my-project/dist
npm run preview  # Preview the production build locally
npm run lint     # ESLint over all .js/.jsx
```

There is no test runner configured.

## Stack and architecture

Single-page personal portfolio. React 19 + Vite 7 + Tailwind CSS v4, deployed to Vercel.

- **Tailwind v4 via Vite plugin.** Tailwind is wired through `@tailwindcss/vite` in [my-project/vite.config.js](my-project/vite.config.js) and activated by `@import "tailwindcss"` at the top of [my-project/src/index.css](my-project/src/index.css). There is no `tailwind.config.js` — v4 reads config from CSS. Theme tokens like `text-accent` / `border-accent` are referenced in components but currently rely on Tailwind's default resolution; if you add custom tokens, do it inside `index.css` using v4's `@theme` syntax, not a JS config.
- **Component composition.** [my-project/src/App.jsx](my-project/src/App.jsx) is the entire page shell — it renders the fixed-background grid + radial glow once, then stacks the section components (`Navbar`, `Hero`, `Technologies`, `Projects`, `Contact`, `Footer`) inside a single centered container. There is no router; navigation is in-page anchor links.
- **Components directory is capitalized:** [my-project/src/Components/](my-project/src/Components/) (not `components/`). Match that casing in imports — case-insensitive filesystems hide breakage that will fail on Vercel's Linux build.
- **Content lives in [my-project/src/constants/index.js](my-project/src/constants/index.js).** `HERO_CONTENT`, `ABOUT_TEXT`, `EXPERIENCES`, `PROJECTS`, and `CONTACT` are exported from there, and project screenshots (`docport.jpeg`, `bloghexa.jpeg`, etc.) sit in the same `constants/` folder and are imported as ES modules into that file. To add or update a portfolio entry, edit `PROJECTS` and drop the image alongside `index.js`.
- **Animations.** Framer Motion (`framer-motion`) drives entry animations and floating loops throughout. The recurring pattern is a `staggerContainer` + `fadeUp` pair with `whileInView` + `viewport={{ once: true }}` — reuse this pattern rather than introducing a new motion library.
- **Icons.** `react-icons` (`ri/*`, `si/*`) and `lucide-react` are both in use; pick whichever already covers the icon you need rather than adding a third set.
- **Contact form.** [my-project/src/Components/Contact.jsx](my-project/src/Components/Contact.jsx) POSTs JSON to a hardcoded Basin endpoint (`https://usebasin.com/f/d971cb8c17ec`). Success/failure are surfaced via `react-hot-toast`, whose `<Toaster />` is mounted once in `App.jsx`.

## Deployment

[my-project/vercel.json](my-project/vercel.json) rewrites every path to `/`, so the SPA can be hosted as a static build on Vercel without 404s on refresh. Vercel must be pointed at `my-project/` as the project root.

## Lint config quirk

[my-project/eslint.config.js](my-project/eslint.config.js) ignores unused variables whose names start with a capital letter or underscore (`varsIgnorePattern: '^[A-Z_]'`). Imported but unrendered React components therefore won't trigger the rule — don't rely on lint to catch dead imports of `PascalCase` symbols.
