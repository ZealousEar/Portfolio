<!-- c0aead55-5041-4817-8a1e-0a80f6729d33 4a4e1dc3-1b0f-440a-9d33-3935d59977f4 -->
# Static Export for GitHub Pages

## Overview
Convert the current Next.js 16 portfolio into a fully static build suitable for `next export`, replacing runtime GitHub fetches with manual data and ensuring all pages work without server features.

## Steps

### 1. Remove Server/Runtime GitHub Dependencies
- Delete `app/api/github/v1/[repo]/route.ts` and any imports/references to it
- Remove `@octokit/rest`, `lib/github.ts`, and related hooks from `projects` pages

### 2. Replace Dynamic Stats with Manual Data
- Update `content/projects/projectsData.ts` to hold static stars/forks/updated values
- Adjust project detail pages (`app/projects/[slug]/page.tsx`) to read manual stats instead of fetching
- Replace recent commits list with placeholder or hard-coded entries

### 3. Simplify Markdown Loading
- Keep markdown import via `loadProjectMarkdown`, but ensure it runs at build by calling only on server side without dynamic imports
- Verify no `cache()` or other server-only utilities remain

### 4. Update UI Components
- `ProjectCard` and `ProjectDetail` should consume the static metadata props and skip any async calls
- Remove references to GitHub telemetry / ISR messaging (“cached with 24h revalidation”) from UI copy

### 5. Configure Static Export
- Set `output: "export"` (and optional `trailingSlash: true`) in `next.config.ts`
- Ensure `npm run build && next export` produces the `out/` directory without warnings
- Update README with GitHub Pages deployment instructions (docs folder or gh-pages branch)

### 6. Cleanup & Verification
- Remove unused packages from `package.json`
- Run `npm install`, `npm run build`, `npx next export`
- Test `out/index.html` locally (e.g., `npx serve out`) to confirm everything renders

## Deliverables
- Static-ready codebase with manual project stats
- Updated config and documentation for GitHub Pages deployment
- Verified static export output in `out/`


### To-dos

- [ ] Initialize Next.js 14 project with TypeScript, Tailwind, and install all dependencies
- [ ] Configure Tailwind with terminal color palette and monospace fonts
- [ ] Create terminal.css with scanline, blink, flicker, and glow effects
- [ ] Build 6 core terminal UI components (Layout, Window, Typewriter, etc.)
- [ ] Implement GitHub integration functions with Octokit
- [ ] Create projectsData.ts with structured data for 3 projects
- [ ] Build landing page with hero, navigation, and stats grid
- [ ] Create projects grid page with terminal-styled cards
- [ ] Implement dynamic project detail pages with minimal content structure
- [ ] Create GitHub API routes with ISR and caching
- [ ] Build contact page with GitHub/LinkedIn/email links
- [ ] Configure root layout with theme, fonts, and meta tags
- [ ] Create .env.example, .gitignore, vercel.json, and README.md