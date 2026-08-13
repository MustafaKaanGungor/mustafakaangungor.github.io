<script>
    import { base } from '$app/paths';
    import { person } from '$lib/data/site.js';
    import Icon from './Icon.svelte';
    import RichText from './RichText.svelte';

    let { hero, cv } = $props();
</script>

<section
    id="intro"
    class="flex min-h-[78vh] flex-col justify-center gap-8 py-20 sm:py-28"
>
    <p class="flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-muted">
        <span class="size-1.5 rounded-full bg-accent" aria-hidden="true"></span>
        {person.availability}
    </p>

    <!-- Fluid sizing rather than breakpoints: a long single word like
         "Infrastructure" overflows a 375px screen at a fixed text-6xl. -->
    <h1 class="font-display font-extrabold tracking-tight leading-[0.92] break-words">
        <span class="block text-[clamp(1.5rem,6vw,3.75rem)] text-muted">{hero.eyebrow}</span>
        <span class="block text-[clamp(2.25rem,10vw,6rem)]">{hero.role}</span>
    </h1>

    <p class="max-w-2xl text-base sm:text-lg lg:text-xl text-muted leading-relaxed">
        <RichText segments={hero.tagline} />
    </p>

    <div class="flex flex-wrap items-center gap-3">
        <a
            href="#projects"
            class="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink duration-200 hover:bg-accent/85"
        >
            See projects
            <span class="duration-200 group-hover:translate-x-0.5">
                <Icon name="arrow-right" size={16} />
            </span>
        </a>

        <a
            href="{base}{cv.file}"
            download
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-body duration-200 hover:border-accent hover:text-accent"
        >
            <Icon name="download" size={16} />
            Download CV
        </a>
    </div>
</section>
