<script>
    import { reveal } from '$lib/actions/reveal.js';

    // Used twice per page: once for a track's experience, once for the shared
    // organizations list. Both use { role, company, location?, period, bullets[] }.
    let { heading, items = [] } = $props();
</script>

<div class="flex flex-col gap-6">
    <h3 class="font-display text-xs uppercase tracking-[0.25em] text-muted">{heading}</h3>

    <ol class="flex flex-col gap-10 border-l border-line pl-6 sm:pl-8">
        {#each items as item, i}
            <li use:reveal={{ delay: Math.min(i, 4) * 70 }} class="reveal relative">
                <span
                    class="absolute -left-[1.8125rem] top-2 size-2 rounded-full bg-accent sm:-left-[2.3125rem]"
                    aria-hidden="true"
                ></span>

                <p class="text-xs uppercase tracking-widest text-muted">{item.period}</p>

                <h4 class="mt-1 font-display text-lg sm:text-xl font-semibold tracking-tight">
                    {item.role}
                </h4>

                <p class="text-sm text-accent">
                    {item.company}{#if item.location}<span class="text-muted"> · {item.location}</span>{/if}
                </p>

                {#if item.bullets?.length}
                    <ul class="mt-3 flex flex-col gap-2">
                        {#each item.bullets as bullet}
                            <li class="flex gap-3 text-sm text-muted">
                                <span class="mt-2 size-1 shrink-0 rounded-full bg-line" aria-hidden="true"
                                ></span>
                                <span>{bullet}</span>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </li>
        {/each}
    </ol>
</div>
