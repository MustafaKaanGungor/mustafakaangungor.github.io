<script module>
    // Bento spans on a 6-column grid. Tailwind cannot see concatenated class
    // fragments, so every value here is a complete literal string.
    const SPAN = {
        lg: 'col-span-2 lg:col-span-4 lg:row-span-2',
        md: 'col-span-2 lg:col-span-3',
        sm: 'col-span-2 sm:col-span-1 lg:col-span-2'
    };
</script>

<script>
    import { reveal } from '$lib/actions/reveal.js';
    import Icon from './Icon.svelte';

    let { project, delay = 0 } = $props();

    let featured = $derived(project.size === 'lg');
    let span = $derived(SPAN[project.size] ?? SPAN.sm);
</script>

<svelte:element
    this={project.href ? 'a' : 'div'}
    href={project.href ?? undefined}
    target={project.href ? '_blank' : undefined}
    rel={project.href ? 'noopener noreferrer' : undefined}
    use:reveal={{ delay }}
    class="reveal group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface duration-300 hover:border-accent/50 hover:-translate-y-0.5 {span}"
>
    <div class="relative w-full flex-1 min-h-36 overflow-hidden bg-ink">
        {#if project.image}
            <img
                src={project.image}
                alt=""
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover duration-500 group-hover:scale-[1.03]"
            />
        {:else}
            <div class="absolute inset-0 grid place-items-center text-line">
                <Icon name={project.icon ?? 'code'} size={featured ? 96 : 64} />
            </div>
        {/if}
    </div>

    <div class="flex flex-col gap-2 p-4 sm:p-5">
        <div class="flex items-start justify-between gap-3">
            <h3
                class="font-display font-semibold tracking-tight {featured
                    ? 'text-xl sm:text-2xl'
                    : 'text-base sm:text-lg'}"
            >
                {project.name}
            </h3>
            {#if project.href}
                <span
                    class="shrink-0 text-muted duration-200 group-hover:text-accent"
                    title={project.linkLabel ?? 'Open'}
                >
                    <Icon name="arrow-up-right" size={18} />
                </span>
            {/if}
        </div>

        <p class="text-muted {featured ? 'text-sm sm:text-base' : 'text-sm'}">
            {project.description}
        </p>

        {#if project.tech?.length}
            <ul class="mt-1 flex flex-wrap gap-1.5">
                {#each project.tech as item}
                    <li class="rounded-full border border-line px-2 py-0.5 text-[11px] text-muted">
                        {item}
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
</svelte:element>
