<script>
    import { reveal } from '$lib/actions/reveal.js';
    import { person } from '$lib/data/site.js';
    import ContactLinks from './ContactLinks.svelte';

    let { compact = false } = $props();
</script>

<footer id="contact" class="border-t border-line {compact ? 'py-8' : 'py-20 sm:py-28'}">
    {#if compact}
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-sm text-muted">{person.name} · {person.location}</p>
            <ContactLinks compact />
        </div>
    {:else}
        <div use:reveal class="reveal flex flex-col gap-8">
            <h2 class="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                Let's talk.
            </h2>

            <a
                href="mailto:{person.email}"
                class="w-fit break-all text-xl sm:text-3xl text-accent underline-offset-8 duration-200 hover:underline"
            >
                {person.email}
            </a>

            <ContactLinks />

            <p class="pt-6 text-sm text-muted">{person.location}</p>
        </div>
    {/if}
</footer>
