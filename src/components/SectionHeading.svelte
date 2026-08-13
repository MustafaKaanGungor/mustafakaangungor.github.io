<script>
    let { title, intro = null, eyebrow = null } = $props();
</script>

<div class="flex flex-col gap-3 mb-12 sm:mb-16">
    {#if eyebrow}
        <p class="text-accent text-xs uppercase tracking-[0.25em]">{eyebrow}</p>
    {/if}
    <h2 class="font-display font-semibold text-4xl sm:text-5xl tracking-tight">
        {title}
    </h2>
    {#if intro}
        <p class="text-muted text-base sm:text-lg max-w-2xl">{intro}</p>
    {/if}
</div>
