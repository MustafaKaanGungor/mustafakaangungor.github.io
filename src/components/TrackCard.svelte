<script>
    import { base } from '$app/paths';
    import { reveal } from '$lib/actions/reveal.js';
    import Icon from './Icon.svelte';

    let { track, delay = 0 } = $props();
</script>

<a
    href="{base}{track.path}"
    use:reveal={{ delay }}
    class="reveal group flex flex-col gap-5 rounded-2xl border border-line bg-surface p-7 sm:p-9 duration-300 hover:-translate-y-1 hover:border-accent/50"
>
    <span class="text-muted duration-300 group-hover:text-accent">
        <Icon name={track.icon} size={32} />
    </span>

    <h2 class="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
        {track.label}
    </h2>

    <p class="flex-1 text-sm sm:text-base text-muted leading-relaxed">
        {track.blurb}
    </p>

    <span class="inline-flex items-center gap-2 text-sm text-accent">
        View portfolio
        <span class="duration-200 group-hover:translate-x-1">
            <Icon name="arrow-right" size={16} />
        </span>
    </span>
</a>
