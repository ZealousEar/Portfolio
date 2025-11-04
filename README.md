# Farhad Chichgar — Terminal Portfolio

Terminal-inspired portfolio for a quantitative finance candidate. Built with Next.js 16 (App Router), Tailwind CSS, and Framer Motion—exportable as a fully static site for GitHub Pages.

## Features

- Console aesthetic with scanline, glow, and typewriter effects
- Landing page hero with terminal navigation and quick stats grid
- Projects hub with manually curated GitHub metrics and terminal window cards
- Dynamic project detail pages sourced from Markdown content
- Research and contact sections styled as console prompts
- Optional matrix rain background with motion-safe fallback

## Tech Stack

- Next.js 16 · App Router · TypeScript
- Tailwind CSS 4 · Custom terminal theme
- Framer Motion · react-typed
- gray-matter + remark for Markdown ingestion

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the portfolio.

## Content Management

- Project metadata: `content/projects/projectsData.ts`
- Detailed write-ups: `content/projects/*.md`
- Replace `{TODO: ...}` placeholders with final narratives.
- Update the `stats` and `commits` fields inside `projectsData.ts` whenever repository metrics change.
- `{auto_fetch_date}` tokens inside markdown are replaced with the manual `stats.updated` value at build time.

## Useful Scripts

- `npm run dev` – start local development server
- `npm run build` – generate production build
- `npm run start` – serve production build locally
- `npm run lint` – run ESLint checks

## Static Export & GitHub Pages

1. Build the project:

   ```bash
   npm run build
   ```

   With `output: "export"` configured, the static site is emitted to the `out/` directory (with trailing slashes for GitHub Pages compatibility).

2. Deploy options:
   - **`docs/` folder** – move the contents of `out/` into a `docs/` directory and enable GitHub Pages on `main /docs`.
   - **`gh-pages` branch** – push the `out/` contents to a dedicated branch (e.g., using the `gh-pages` npm package).

3. After building, you can preview locally with `npx serve out`.

## Accessibility & Performance Notes

- Matrix rain effect disabled on mobile and for users with reduced motion preferences.
- Terminal theme honours `prefers-reduced-motion` and keeps text legible on dark backgrounds.
