# AGENTS.md

## Stack

- **Next.js 16.2.10** (App Router) with **React 19.2.4** and **React Compiler** enabled
- **Tailwind CSS v4** — uses `@import "tailwindcss"` + `@theme inline` in `globals.css`, not v3 syntax
- **No TypeScript** — plain JS with `jsconfig.json` path aliases
- **Animation libs**: GSAP (`@gsap/react`), Motion (`motion`), OGL (`ogl`) for WebGL shaders

## Commands

```bash
npm run dev      # dev server (localhost:3000)
npm run build    # production build
npm run lint     # eslint
```

No test runner is configured. No typecheck script.

## Path alias

`@/*` maps to `./src/*` (jsconfig.json).

## Architecture

- `src/app/` — App Router pages; single route (`page.js` renders `HeroSection`)
- `src/components/` — reusable components, organized by type:
  - `Backgrounds/` — WebGL shader effects (Aurora, Orb) using OGL; client-only, WebGL-required
  - `Animations/` — GSAP/Motion wrappers (FadeContent, StarBorder)
  - `TextAnimations/` — text effect components (SplitText, GradientText)
  - `Components/` — UI primitives (SpotlightCard)

## Key quirks

- WebGL components (`Aurora.js`, `Orb.js`) use raw OGL with GLSL shaders — they are client-only and will crash in SSR without a guard. They handle cleanup via `requestAnimationFrame` cancel + `WEBGL_lose_context`.
- `globals.css` uses Tailwind v4's `@theme inline` block for CSS custom property registration — not the v3 `tailwind.config.js` approach.
- ESLint uses flat config (`eslint.config.mjs`) with `eslint-config-next/core-web-vitals`.
- React Compiler is on (`reactCompiler: true` in `next.config.mjs`) — hooks rules are enforced at build time.
- No CI, no `.github/workflows`, no `.cursorrules`, no `.cursor/rules/`.
