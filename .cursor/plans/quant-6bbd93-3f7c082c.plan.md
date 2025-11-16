<!-- 3f7c082c-1368-4594-976c-791f173106c0 0985bdf4-b45a-461f-a017-78fb86ee4186 -->
# Terminal Quant Portfolio v1 — Implementation Plan

## Tech & Decisions
- Framework: Next.js 14 (App Router), TypeScript, Tailwind CSS
- Animations: Framer Motion (micro motions), react-typed (hero typing)
- GitHub: Octokit (unauthenticated), ISR 24h, graceful fallback on rate limits
- Content: Markdown files per project + projectsData.ts metadata
- Versioning: API routes under app/api/github/v1/[repo]/route.ts (suffix v1)
- Contact: Links only (GitHub/mailto/LinkedIn). No contact API

## File Structure (key paths)
- app/layout.tsx — root layout, fonts, global theme import
- app/page.tsx — landing (hero, quick stats, nav)
- app/projects/page.tsx — projects grid
- app/projects/[slug]/page.tsx — dynamic project details
- app/research/page.tsx — research listing (placeholder sections)
- app/contact/page.tsx — links: GitHub, mailto, LinkedIn
- app/api/github/v1/[repo]/route.ts — repo stats proxy (ISR 24h)
- components/terminal/* — terminal UI primitives
- components/projects/* — ProjectCard, ProjectDetail
- components/effects/* — ScanLines, MatrixRain
- content/projects/*.md — markdown per project
- content/projects/projectsData.ts — project metadata
- lib/github.ts — Octokit wrappers (getRepoStats, getRecentCommits)
- lib/utils.ts — markdown loader, helpers
- styles/terminal.css — terminal effects (scanlines, blink, flicker)
- public/resume.pdf — resume
- vercel.json — optional function tuning (no env needed)

## Theming & Global Layout
- Tailwind: extend palette (bg #0a0e14, primary #00ff41, cyan #00d4ff, white #ffffff, gray #4a5568, red #ff0040, success #00ff88)
- JetBrains Mono via next/font with monospace fallbacks
- Import styles/terminal.css globally; respect prefers-reduced-motion
- Subtle scanlines and flicker; matrix rain very low opacity (toggle)

## Key Components
- TerminalLayout — frame (traffic lights, prompt banner, scanlines, optional matrix rain)
- TerminalWindow — boxed area with ASCII header and content slot
- TypewriterText — react-typed wrapper + blinking cursor
- AsciiDivider — ASCII art separators
- ConsolePrompt — prompt line styling
- Navigation — numbered terminal menu
- ProjectCard — terminal window card; hover glow; stars/updated auto-fetched
- ProjectDetail — header prompt, markdown body, stats panel, code snippet block
- ScanLines/MatrixRain — lightweight effects (throttled)

## Pages
- Landing: hero title, typing lines, terminal menu, quick stats grid
- Projects Grid: map projectsData to cards; fetch GitHub stats with ISR
- Project Detail: load markdown + metadata; fetch repo stats + commits; render sections; replace {auto_fetch_date}
- Research: placeholder terminal windows for papers; easy expansion
- Contact: terminal list linking GitHub, mailto, LinkedIn

## GitHub Integration & Caching
- lib/github.ts: unauthenticated Octokit; safe error handling; return null on failure
- API route: app/api/github/v1/[repo]/route.ts — GET ?owner=ZealousEar; returns stars, forks, language, updated, description, topics, openIssues; Cache-Control s-maxage=86400, stale-while-revalidate=86400
- Pages may fetch via API or call lib in RSC with next: { revalidate: 86400 }

## Accessibility & Performance
- Respect prefers-reduced-motion; effectsEnabled flag
- Keep matrix rain off on mobile or cap FPS; lazy-mount heavy effects
- Static generation for all routes; ISR for GitHub data (24h)

---

## Recruiter-first UX Philosophy (No Code)

### What recruiters need in 6–30 seconds
- **Relevance**: Do you build what they need? (quant, pricing, ML, trading)
- **Competence**: Can you deliver? (evidence, metrics, code quality)
- **Risk**: Is it safe to advance you? (clarity, professionalism, recency, contact)

### Aesthetic principles (terminal, but professional)
- **Legibility first**: High contrast, generous line-height, avoid neon-on-neon. Dark background with restrained highlight color.
- **Restraint in motion**: Typing/scanlines should whisper, not shout. Stop animations near content while reading.
- **Meaningful color**: Green = success/positive metrics; cyan = links; red only for “risk/error”. Color carries semantics, not decoration.
- **Hierarchy without gimmicks**: Use ASCII borders and prompt lines to segment content, not to dominate it.

### Information architecture for skimmability
- **Above-the-fold clarity**: Name + role + one-line value prop + two primary CTAs (Projects, Resume).
- **Hick’s Law**: Limit top-level choices to 3–5. Your menu already matches this.
- **Information scent**: Link labels should reveal outcome (“View code”, “Backtest results”, “Download resume”). Avoid “Learn more”.
- **Serial position effect**: Put “Projects” first and “Resume” last in the menu; both get the most attention.

### Project presentation that converts
- **TL;DR first**: A 2–3 line summary answering Problem → Solution → Proof.
- **Proof beats promise**: Numbers win—Sharpe, drawdown, latency, throughput, accuracy, data size, cost savings.
- **Recency matters**: Show “Last updated” prominently; stale projects reduce trust.
- **Scannable structure**: Bulleted key features, then a short narrative. Long content collapsible.
- **Two clear CTAs**: “View code on GitHub” and “Read 60‑sec summary” (or “Results”).
- **De-risk IP**: If proprietary, state “synthetic data / anonymized.” Show method and rigor without sensitive details.

### Click-through drivers (reduce friction)
- **Primary action prominence**: A distinct, consistent CTA style (cyan link or outlined button) for Projects and Resume.
- **Fitts’s Law**: Make tap targets large with generous spacing; especially on mobile.
- **Keyboard-friendly**: Numbered menu mirrors terminal; also make items clickable. Visible focus states.
- **Minimize steps**: 1 click from hero to projects; 1 click from card to code.

### Signals of quality and maturity
- **Freshness**: Recent commits, updated_at, current stack.
- **Completeness**: README quality, reproducible instructions, tests/screenshots.
- **Communication**: Clear writing, precise terms, thoughtful trade-offs (e.g., bias‑variance, latency vs. accuracy).
- **Ethos**: Privacy-friendly, no popups, no trackers—signals professionalism.

### Accessibility as a professionalism signal
- **Motion controls**: Respect prefers-reduced-motion; provide “Effects: on/off”.
- **Contrast and size**: Terminal greens meet WCAG contrast; comfortable font sizes.
- **Keyboard and screen readers**: Focus order, semantic headings, descriptive link text.

### Mobile heuristics
- **Single column**: No side-by-side terminals on small screens.
- **Sticky CTA**: Keep “Projects” visible near the top. Resume easy to reach.
- **Trim effects**: Disable matrix rain on mobile by default to preserve battery and attention.

### Narrative and brand coherence
- **One-sentence hook**: “Quant dev building production-grade pricing and ML trading systems.”
- **Consistency**: Same handle (ZealousEar), same tone across GitHub/LinkedIn.
- **Signature element**: A tasteful ASCII divider reused across pages—memorable, not kitsch.

### What to avoid
- **Overbearing effects**: Loud matrix rain, long type delays, flicker near copy.
- **Vague links**: “Learn more”, “Click here”.
- **Wall-of-text**: Recruiters skim; layer depth progressively.
- **Stale repos**: Hide or clearly mark archived work.

### Measurement (privacy-first, directional)
- **Outcome metrics**: Time‑to‑first‑click on Projects, Resume clicks, GitHub clickouts.
- **Content iteration**: If Projects beat Resume by >3×, surface Projects earlier/larger. If GitHub outperforms, duplicate CTA near top.
- **No dark patterns**: Optimize clarity, not trickery; long-term reputation matters.

### Order of operations (content before chrome)
- **Write the TL;DRs first**: Crisp summaries for each project.
- **Select 3 flagship projects**: Depth over breadth.
- **Curate proof**: Two quant metrics per project, plainly stated.
- **Then** wrap with the terminal aesthetic.


### To-dos

- [ ] Initialize Next.js 14 + Tailwind + TS; install deps (octokit, framer-motion, react-typed, remark stack)
- [ ] Configure Tailwind theme and import global terminal.css with effects
- [ ] Add JetBrains Mono via next/font and build Root layout
- [ ] Implement TerminalLayout, TerminalWindow, TypewriterText, AsciiDivider, ConsolePrompt, Navigation
- [ ] Add ScanLines and MatrixRain (throttled canvas, low opacity)
- [ ] Create lib/github.ts and API route app/api/github/v1/[repo]/route.ts with ISR 24h
- [ ] Create projectsData.ts and three project markdown files with placeholders
- [ ] Build landing page hero, typing, quick stats grid, terminal menu
- [ ] Build projects grid with ProjectCard and live GitHub stats
- [ ] Build dynamic project detail page loading MD + stats + commits
- [ ] Add research listing page with placeholders
- [ ] Add contact page linking GitHub, mailto, LinkedIn
- [ ] Add vercel.json (function limits). No env vars needed
- [ ] Add reduced-motion, lazy effects, and caching fallbacks