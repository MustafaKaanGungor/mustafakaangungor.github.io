# AGENTS.md

This document provides guidance for AI agents working with this SvelteKit portfolio project.

## Project Overview

- **Framework**: SvelteKit with Svelte 5 (runes mode)
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Language**: JavaScript (no TypeScript configured)
- **Testing**: Not configured

## Build/Lint/Test Commands

### Development
```bash
npm run dev                    # Start dev server with hot reload
npm run dev -- --open          # Start dev server and open browser
```

### Production
```bash
npm run build                  # Build for production
npm run preview                # Preview production build locally
```

### Utility
```bash
npm run prepare                # Sync SvelteKit types (runs automatically on install)
```

**Note**: No linting or testing frameworks are configured. The project uses `checkJs: false` in jsconfig.json, meaning JavaScript is not type-checked.

## Code Style Guidelines

### General Conventions

- **Indentation**: 4 spaces in this codebase (observe existing files)
- **Line endings**: Platform-specific (Windows environment)
- **Quotes**: Use single quotes for strings in JavaScript
- **Semicolons**: Not used ( ASI style)
- **Trailing commas**: Not used

### Svelte Component Structure

Follow this order in `.svelte` files:
1. `<script>` block at the top
2. HTML markup
3. `<style>` block (if present) at the bottom

### Svelte 5 Patterns

This project uses **Svelte 5 runes mode** (see `svelte.config.js`):
- Use `$state()` for reactive state
- Use `$props()` for component props
- Use `{@render children()}` for slot content
- Props are destructured: `let { propName } = $props()`
- State is declared: `let count = $state(0)`

```svelte
<script>
    let { children } = $props();
    let count = $state(0);
</script>

<div>
    {@render children()}
</div>
```

### File Naming Conventions

- Svelte components: PascalCase (`Header.svelte`, `MainSection.svelte`)
- JavaScript modules: camelCase (`utils.js`, `helpers.js`)
- Route files: Use SvelteKit conventions (`+page.svelte`, `+layout.svelte`, `+server.js`)
- Server files: Lowercase with descriptive names (`api/users/+server.js`)

### Import Conventions

- Use `$lib` alias for internal modules: `import { utils } from '$lib/utils'`
- Use relative imports for sibling/parent files: `import Header from '../components/Header.svelte'`
- Group imports logically (external, internal, relative) when mixing

### CSS/Styling Conventions

- Use Tailwind CSS utility classes extensively
- Custom CSS goes in `src/app.css`
- Tailwind v4 uses `@import "tailwindcss"` directive
- Use `class` attribute, not `style`, for most styling
- Use responsive prefixes: `sm:`, `md:`, `lg:` for breakpoints

### Tailwind Color Scheme

This portfolio uses a dark theme with violet accents:
- Background: `bg-slate-950`
- Primary accent: `text-violet-400`, `bg-violet-700`
- Text: `text-white`, `text-slate-950`
- Borders: `border-violet-950`, `border-violet-700`

### HTML Template Conventions

- Use semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<section>`)
- Use `class` for conditional styles with template literals
- Include `viewport` meta tag for responsive design
- Use `<svelte:head>` for page-specific head content

### Component Patterns

**Presentational Components** (e.g., `Header.svelte`, `Footer.svelte`):
- Receive data via props
- Handle minimal logic
- Return rendered markup

**Data Components** (e.g., `Main.svelte`):
- Define data arrays within script block
- Use `{#each}` blocks to iterate over data
- Maintain internal state with `$state()`

**Reusable Card/Step Components** (e.g., `Step.svelte`):
- Accept data via props (`$props()`)
- Use `<slot />` or `{@render children()}` for content projection
- Include consistent styling and hover states

### Responsive Design

- Mobile-first approach
- Breakpoints: `sm:` (640px+), `md:` (768px+), `lg:` (1024px+)
- Use `flex-col` on mobile, `lg:flex-row` for larger screens
- Test at multiple viewport sizes

### Accessibility Considerations

- Use semantic HTML
- Include `alt` attributes for images
- Use proper heading hierarchy (`h1` -> `h2` -> `h3`)
- Ensure interactive elements are keyboard accessible

## Project Structure

```
src/
├── app.css              # Global styles and Tailwind imports
├── app.html             # HTML template
├── components/          # Reusable Svelte components
│   ├── Header.svelte
│   ├── Footer.svelte
│   ├── Main.svelte
│   └── Step.svelte
├── lib/                 # Library code (imported via $lib alias)
│   └── index.js
└── routes/              # SvelteKit pages
    ├── +layout.svelte   # Root layout
    └── +page.svelte     # Home page
```

## Common Tasks

### Adding a New Component
1. Create file in `src/components/`
2. Use PascalCase filename
3. Import with relative path: `import NewComponent from '../components/NewComponent.svelte'`

### Adding a New Route
1. Create directory in `src/routes/`
2. Add `+page.svelte` for the page component
3. Optionally add `+layout.svelte` for route-specific layout
4. Use `+server.js` for API endpoints

### Adding Global Styles
1. Edit `src/app.css`
2. Use Tailwind utilities or add custom CSS
3. Avoid inline styles on components

## Development Notes

- The `.svelte-kit/` directory is generated - do not edit
- `node_modules/` is managed by npm - do not edit manually
- Use `npm run prepare` if TypeScript/SvelteKit types are out of sync
- The project uses adapter-auto; deploy target may require specific adapter
