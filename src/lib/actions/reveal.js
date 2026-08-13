/**
 * Fade/slide an element in the first time it scrolls into view.
 *
 * Svelte actions only run in the browser, so this is safe under SSR — the
 * prerendered HTML ships fully visible and only gets hidden once this action
 * arms it. That keeps the content readable if JS never loads.
 *
 * @param {HTMLElement} node
 * @param {{ delay?: number }} [options]
 */
export function reveal(node, options = {}) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
        return {};
    }

    node.classList.add('reveal-armed');

    if (options.delay) {
        node.style.transitionDelay = `${options.delay}ms`;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
