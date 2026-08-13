# AGENTS.md

Guidance for AI agents working on this SvelteKit portfolio.

## Project overview

- **Framework**: SvelteKit 2 with Svelte 5 (runes mode, enforced in `svelte.config.js`)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` — no `tailwind.config`, tokens live in `src/app.css`
- **Build**: Vite, output by `adapter-static` into `docs/`
- **Language**: JavaScript (no TypeScript, `checkJs: false`)
- **Testing / linting**: not configured

## The one thing to understand first

This site serves **two audience-specific portfolios from one codebase**:

| Route | Page |
|---|---|
| `/` | Chooser — two cards linking to the tracks |
| `/game/` | Game development portfolio |
| `/it/` | IT / infrastructure portfolio |

Both tracks use **identical components and identical design**. Only the *content* differs, and all of that content lives in `src/lib/data/`. The track pages are three lines each; they import a data object and hand it to `TrackPage.svelte`.

**Never hardcode content into a component.** If you're editing markup to change what the site says, you're in the wrong file.

## Commands

```bash
npm run dev        # dev server
npm run build      # production build into docs/
npm run preview    # serve the real docs/ build
```

## Content contract (`src/lib/data/`)

- `site.js` — everything shared by both tracks: person, education, organizations, contacts, languages.
- `game.js` / `it.js` — one default-exported object per track.
- `tracks.js` — registry plus `otherTrack(id)`, which drives the header's cross-track link.

### Adding a project

Append one object to `projects.items` in the relevant track file. Nothing else changes.

```js
{
    name: 'Project Name',
    image: someImport,   // or null → falls back to an icon tile
    icon: 'server',      // only used when image is null; see Icon.svelte for names
    description: '…',
    href: 'https://…',   // or null → tile renders as a <div>, not a dead link
    linkLabel: 'GitHub',
    tech: ['Docker', 'Nginx'],
    size: 'md'
}
```

### Bento sizing

The projects grid is `grid-cols-2 lg:grid-cols-6`. Each item's `size` maps to a span in `ProjectTile.svelte`:

| `size` | Span | Use for |
|---|---|---|
| `lg` | 4 cols × 2 rows | the one featured project |
| `md` | 3 cols | half-width |
| `sm` | 2 cols | default; thirds |

**Keep each row's spans summing to 6**, or you'll leave a hole. The `/game` layout is `lg` + `sm` + `sm` (rows 1–2) then three `sm` (row 3). `/it` is `md` + `md`.

### Accented prose

Data files cannot contain markup. Prose that needs a highlighted phrase is an array of segments rendered by `RichText.svelte`:

```js
tagline: [
    { text: 'I deploy ' },
    { text: 'production Linux systems', accent: true },
    { text: '.' }
]
```

## Design system

Tokens are defined in the `@theme` block of `src/app.css`. Use the semantic names, not raw Tailwind palette colours:

| Token | Class | Role |
|---|---|---|
| `--color-ink` | `bg-ink` | page ground |
| `--color-surface` | `bg-surface` | raised tiles |
| `--color-line` | `border-line` | hairline borders |
| `--color-body` | `text-body` | body copy |
| `--color-muted` | `text-muted` | dates, metadata |
| `--color-accent` | `text-accent` | the single accent |

Rules:

- **One accent.** Teal marks links, the timeline rail and the availability dot. Nothing else is coloured. No gradients.
- **Hairlines, not boxes.** 1px `border-line`; hover moves the border to `accent/50` and lifts the element.
- **Big type.** Hero headings use fluid `text-[clamp(…)]` rather than breakpoints — a long single word like "Infrastructure" overflows a 375px screen at a fixed `text-6xl`.
- **Icons are inline SVG** in `Icon.svelte`. There is no icon CDN; do not add one.
- **Scroll reveal** via `use:reveal` from `$lib/actions/reveal.js`. It arms the element only in the browser, so prerendered HTML stays visible without JS, and it no-ops under `prefers-reduced-motion`.

### Tailwind v4 gotcha

Tailwind scans source for **complete literal class strings**. A class assembled by concatenation is never generated. Always write conditionals as whole strings:

```js
// good
const span = size === 'lg' ? 'lg:col-span-4 lg:row-span-2' : 'lg:col-span-2';

// broken — Tailwind never sees these classes
const span = `lg:col-span-${cols}`;
```

## Routing and build

- **Page options live in `src/routes/+layout.js`**, never in a `.svelte` file. `prerender` and `ssr` exported from a `.svelte` file are silently ignored — that bug once left the site with no `index.html` at all.
- `trailingSlash = 'always'` is what produces `docs/game/index.html` instead of `docs/game.html`. **Write internal links with a trailing slash** (`/it/`, not `/it`).
- **SSR is on.** Components are rendered in Node at build time, so any `window`/`document` access at module or render scope fails the build. Put it in an event handler, an `$effect`, or an action.
- Prefix paths to files in `static/` with `base` from `$app/paths` **at the point of use**. Data files store raw paths (`/transcript.pdf`); never concatenate `base` at module scope, because `paths.relative` resolves it per render.

## Deployment

There is no CI. `docs/` is the live site and is committed.

1. `npm run build`
2. `npm run preview` and check it
3. Commit source **and** `docs/` together, push to `master`

`static/CNAME` holds the custom domain. It must live in `static/`, not `docs/` — the adapter wipes `docs/` on every build, which is how the CNAME got lost once before.

## Structure

```
src/
├── app.css                 # @theme tokens, reveal keyframes
├── app.html                # shell only; per-page meta comes from <svelte:head>
├── components/             # PascalCase, presentational, props-driven
├── lib/
│   ├── actions/reveal.js
│   ├── data/               # ALL site content
│   └── images/             # project screenshots, imported as ES modules
└── routes/
    ├── +layout.js          # prerender + trailingSlash
    ├── +layout.svelte      # chrome only; header/footer are per page
    ├── +page.svelte        # chooser
    ├── game/+page.svelte
    └── it/+page.svelte
```

## Conventions

- 4-space indent, single quotes, semicolons in `.js`.
- Components are PascalCase and receive data via `$props()`.
- Reuse before adding: `Timeline.svelte` renders both experience and organizations; `SectionHeading` and `RichText` are used by every section.
- Keep `alt` on images, use semantic elements, keep heading order sane, and give icon-only buttons an `aria-label`.
