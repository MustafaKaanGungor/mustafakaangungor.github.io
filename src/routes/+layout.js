// Page options only take effect in +layout.js / +page.js — declaring them in a
// .svelte file makes them inert, which is why the build used to emit no index.html.
export const prerender = true;

// Emits docs/game/index.html rather than docs/game.html. Write internal links
// with a trailing slash to avoid a redirect round-trip.
export const trailingSlash = 'always';
