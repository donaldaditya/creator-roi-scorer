# da-system.ai — Design System & Style Guide

**Purpose:** reference this before building any new page, tool, or writing piece on da-system.ai, so it looks like it belongs. Copy the tokens below into new work rather than eyeballing colors from a screenshot.

**Stack:** Next.js 16 (App Router, Turbopack) · Tailwind CSS v4 (`@theme inline`) · TypeScript · deployed on Vercel · repo: `donaldaditya/da-system-creator-score`

---

## 1. There are two visual systems on this site — know which one you're in

| | **Marketing / editorial** | **Tools** |
|---|---|---|
| Where | `/`, `/thesis`, `/writing/*` | `/creator-score`, `/results`, and the other 5 tools |
| Feel | Light, minimal, spare | Dark, dense, data-forward |
| Background | White (`bg-white`) | Near-black (`--bg-app: #0A0A0F`) |
| Text | Gray-900 on white | Off-white on dark |
| Accent | Blue (`#1D4ED8`) — thesis only. Homepage/writing have **no accent color**, just grayscale + underlined links | Cyan (`--accent-cyan: #00D4FF`) |

The site-wide `body` background is dark (set in `globals.css`) — every light page must explicitly wrap its content in `<main className="bg-white ...">` to override it. This is not optional; forgetting it means the page renders on a black body background.

---

## 2. Core tokens (from `app/globals.css`)

### Dark theme (tools) — CSS custom properties on `:root`

```css
--bg-app: #0A0A0F;        /* page background */
--bg-card: #12121A;       /* card/panel surface */
--bg-card-hover: #1A1A28; /* card hover state */
--border-subtle: #1E1E2E; /* hairline borders */
--accent-cyan: #00D4FF;   /* primary accent — links, active states, focus ring */
--text-primary: #E8EAF0;  /* body text */
--text-muted: #6B7280;    /* secondary text */
```

These are also exposed as Tailwind utilities via `@theme inline` — use `bg-bg-app`, `text-text-primary`, `border-border-subtle`, `bg-accent-cyan`, etc.

Rank/highlight accents used in the Creator Score tool (extend, don't reinvent):
```css
top-rank-1: cyan glow   — rgba(0, 212, 255, 0.06) bg / rgba(0, 212, 255, 0.5) left-border
top-rank-2: gold        — rgba(245, 158, 11, 0.05) bg / rgba(245, 158, 11, 0.4) left-border
top-rank-3: violet      — rgba(167, 139, 250, 0.04) bg / rgba(167, 139, 250, 0.3) left-border
```
Glow shadows: `.glow-cyan` = `0 0 12px rgba(0,212,255,.3)`, `.glow-gold` = `0 0 12px rgba(245,158,11,.3)`.

### Light theme (marketing/editorial) — plain grayscale, no CSS variables, just Tailwind classes

```
bg-white          page background
text-gray-900     headings, primary text        (#111827)
text-gray-700     emphasized body text           (#374151)
text-gray-500     body/description text          (#6B7280)
text-gray-400     labels, kickers, captions, nav  (#9CA3AF)
text-gray-300     faint / disabled                (#D1D5DB)
border-gray-100   hairline dividers               (#F3F4F6)
```
No accent color on homepage or `/writing`. Links are `text-gray-900 underline underline-offset-2`, hover `text-gray-600`. This is intentional — the restraint *is* the brand signal.

### `/thesis`-only accent (scoped, doesn't leak elsewhere — see §5)

```css
--td-ink: #0F1115;        /* headings */
--td-body: #3F4650;       /* body text */
--td-muted: #6B7280;      /* captions, meta */
--td-line: #E5E7EB;       /* borders */
--td-surface: #FAFAF9;    /* chart card background */
--td-accent: #1D4ED8;     /* links, gate-number circles, accent bars in charts */
--td-accent-ink: #1E3A8A; /* link hover, dark data-label text on light bars */
--td-measure: 68ch;       /* max content width */
```

### Chart palette (Chart.js, used on `/thesis`)

```js
const A = "#1D4ED8"; // accent blue — the "highlighted" series/bar
const M = "#9CA3AF"; // muted gray — comparison/secondary series
const L = "#E5E7EB"; // gridlines
const T = "#6B7280"; // axis labels, tick text
```
Stacked-bar extra shades (adoption-stage chart): `#0C447C` (darkest blue), `#85B7EB` (light blue), `#B4B2A9` / `#D3D1C7` (warm grays for "no data yet" states).

---

## 3. Typography

**Font stack — two different ones, don't mix them up:**

- **Tools (dark theme):** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` — loaded via Google Fonts `@import` in `globals.css`, weights 300–700.
- **Marketing/editorial (light theme, homepage/`/writing`/`/thesis`):** `ui-sans-serif, system-ui, -apple-system, Helvetica, Arial, sans-serif` — **no webfont**, just the OS system font. This is deliberate: it's part of why the editorial pages feel fast and unadorned.

**Scale (editorial article body, `.article-body` / `.thesis-doc`):**
```
h1   clamp(2rem, 4vw, 3rem)   line-height 1.1   letter-spacing -0.02em   weight 600
h2   1.25–1.5rem              line-height 1.25   weight 500–600, margin-top 2.25–3.5em
h3   ~1.0625rem               weight 600
body 0.9375rem–18px           line-height 1.65–1.7
```
Article max-width: **68ch**. This is load-bearing for readability — don't widen it.

**Homepage/tool-card scale:** `text-4xl` H1, `text-xs uppercase tracking-widest` for kickers/section labels ("Decision Architecture", "Tools", "About"), `text-sm font-medium` for card titles, `text-xs text-gray-400` for card body copy.

---

## 4. Layout patterns

- **Container:** `max-w-4xl mx-auto px-6` for everything editorial (nav, hero, tool grid, article body wrapper). Don't go wider — the whole site reads as narrow/considered on purpose.
- **Nav:** always `<SiteNav />` from `components/ArticleLayout.tsx` on light pages — logo mark (black 32px rounded-md square, "DA" in white) + wordmark + `Thesis` / `Writing` text links, LinkedIn link right-aligned. Reuse this component; don't hand-roll a new nav per page.
- **Cards (light):** `bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-300 hover:shadow-sm transition-all` — this is the homepage tool-card and the `/writing` index card. One recipe, reused everywhere.
- **Cards (dark):** `bg-bg-card border border-border-subtle rounded-*` with `hover:bg-bg-card-hover`.
- **Section rhythm:** kicker (`text-xs uppercase tracking-widest text-gray-400`) → heading → 1–2 line description → content. Every homepage section follows this.
- **Chart card (`.td-chart` on `/thesis`):** `background: var(--td-surface); border: 1px solid var(--td-line); border-radius: 10px; padding: 24px 16px 16px`. Chart canvas wrapper `.td-cw` is `position: relative; height: 300px` (360px for "tall" variant — 9+ category horizontal bars).

---

## 5. Scoping rule — don't let styles leak

Two page-specific style blocks exist as **scoped classes** appended to the bottom of `globals.css`, each prefixed so they can't bleed into other pages:
- `.article-body` — markdown-rendered `/writing/*` posts (generic gray-900/gray-500 palette, no accent).
- `.thesis-doc` — the `/thesis` page specifically (has its own `--td-*` variables and the blue accent).

**If you build a new editorial page with its own distinct visual identity, follow this pattern**: define a new scoped class (`.your-page-doc { ... }`) at the bottom of `globals.css`, not global element selectors. This is why `/thesis`'s blue accent doesn't accidentally tint `/writing` or the homepage.

---

## 6. Known layout gotcha — read before adding a new full-page route

`body` is `display:flex; flex-direction:column; height:100%` (see `globals.css`). A flex item (`<main>`) defaults to `flex-shrink:1`, so on any page taller than one viewport, `<main>` gets squeezed to viewport height while its overflowing content paints outside that box — exposing the dark `body` background underneath. **Already fixed globally** via `body > main { flex-shrink: 0; }` in `globals.css` — you don't need to re-fix this, just don't remove that rule.

---

## 7. Charts — how to add one

Charts are **real Chart.js** (`chart.js/auto` + `chartjs-plugin-datalabels` as npm deps), rendered client-side via a `"use client"` component using `useRef` + `useEffect` (see `components/ThesisCharts.tsx` for the full pattern). **Do not** embed Chart.js via a CDN `<script>` tag inside markdown/HTML content — React's `dangerouslySetInnerHTML` does not execute injected `<script>` tags, so CDN-script charts silently fail to render.

Chart defaults to set once at module load:
```js
Chart.defaults.font.family = "ui-sans-serif,system-ui,-apple-system,Helvetica,Arial,sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = T; // #6B7280
```
Bar charts: `borderRadius: 4`, `maxBarThickness: 20–90` depending on category count, `responsive: true, maintainAspectRatio: false` (parent `.td-cw` div controls height). Horizontal bars (`indexAxis: "y"`) for ranked/barrier-style charts; vertical for time-series.

TypeScript note: Chart.js's font-weight type wants a **number** (`600`), not the string `"600"` — this will fail typecheck if you copy a `weight: "600"` string out of a CDN-script example.

---

## 8. Inline SVG in markdown content (`/writing/*`)

The markdown pipeline (`lib/posts.ts`: `remark` → `remark-rehype` with `allowDangerousHtml: true` → `rehype-raw` → `rehype-stringify`) supports raw `<svg>` blocks embedded directly in `.md` files. **CommonMark gotcha:** a blank line inside a raw HTML block terminates the block early — everything after renders as literal escaped text instead of markup. **Keep raw HTML/SVG blocks free of internal blank lines.**

Diagram palette (dark card embedded in a light article — see the persona-system diagram):
```
background:  #0b1a2e
accent:      #85B7EB
box fill:    #122641
box border:  #1c3a5e
muted text:  #6f8caf
```

---

## 9. Open Graph / metadata pattern

Every route needs its own `generateMetadata()` (or static `metadata` export) — the site does **not** rely on layout-level defaults for anything other than the homepage. Pattern used throughout:

```ts
export const metadata: Metadata = {
  title: `${TITLE} — DA System`,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/your-route` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: ..., type: "article", images: [{ url: `${SITE_URL}/your-route/opengraph-image`, width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [...] },
};
```

OG images are generated on-demand via Next's file convention (`opengraph-image.tsx` using `next/og`'s `ImageResponse`), not static PNG assets. **Satori quirk:** any `<div>` with more than one child needs an explicit `display: "flex"` style — it won't infer it, and the build fails with "Expected `<div>` to have explicit display" if you skip it. Standard image is white bg, `#111827` heading, `#6B7280` subtext, 80px padding, 1200×630.

---

## 10. Voice (for any new copy)

Direct, first person, no filler. Short kickers in caps. Captions under charts are dense and precise (base sizes, exhibit numbers, methodology caveats) — never round a stat without naming its source inline. Banned: "in today's landscape," "cutting-edge," unexplained superlatives. This isn't a strict style guide — it's calibration: read `/thesis` before writing new copy for the site.

---

## Quick-reference cheat sheet

```
LIGHT PAGES (marketing/editorial)          DARK PAGES (tools)
bg-white                                   bg (var --bg-app)      #0A0A0F
text-gray-900 / -700 / -500 / -400         text (var --text-primary) #E8EAF0
border-gray-100                            border (var --border-subtle) #1E1E2E
no accent (homepage/writing)               accent-cyan             #00D4FF
blue accent (thesis only)                  card bg (var --bg-card) #12121A
  --td-accent: #1D4ED8
system-ui font                             Inter font
max-w-4xl / 68ch measure                   —
```
