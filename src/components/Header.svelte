<script>
    import { base } from '$app/paths';
    import { person } from '$lib/data/site.js';
    import Icon from './Icon.svelte';

    let {
        brand = person.name,
        home = '/',
        tabs = [],
        // { label, href } linking to the other track, or null on the chooser page.
        cross = null
    } = $props();

    let y = $state(0);
    let open = $state(false);

    function close() {
        open = false;
    }
</script>

<svelte:window
    bind:scrollY={y}
    onkeydown={(event) => {
        if (event.key === 'Escape') close();
    }}
/>

<header
    class="sticky top-0 z-30 duration-200 {y > 8
        ? 'border-b border-line bg-ink/85 backdrop-blur-md'
        : 'border-b border-transparent bg-transparent'}"
>
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="{base}{home}" onclick={close} class="font-display text-lg font-semibold tracking-tight">
            {brand}
        </a>

        <nav class="hidden items-center gap-7 md:flex">
            {#each tabs as tab}
                <a href={tab.link} class="text-sm text-muted duration-200 hover:text-accent">
                    {tab.name}
                </a>
            {/each}

            {#if cross}
                <a
                    href="{base}{cross.href}"
                    class="rounded-full border border-line px-3 py-1 text-sm text-accent duration-200 hover:border-accent"
                >
                    {cross.label}
                </a>
            {/if}
        </nav>

        {#if tabs.length || cross}
            <button
                type="button"
                aria-label={open ? 'Close navigation' : 'Open navigation'}
                aria-expanded={open}
                aria-controls="mobile-nav"
                onclick={() => (open = !open)}
                class="text-body duration-200 hover:text-accent md:hidden"
            >
                <Icon name={open ? 'close' : 'menu'} size={24} />
            </button>
        {/if}
    </div>

    {#if open}
        <nav
            id="mobile-nav"
            class="border-t border-line bg-ink/95 backdrop-blur-md px-6 py-4 md:hidden"
        >
            <ul class="flex flex-col gap-1">
                {#each tabs as tab}
                    <li>
                        <a
                            href={tab.link}
                            onclick={close}
                            class="block py-2.5 text-base text-muted duration-200 hover:text-accent"
                        >
                            {tab.name}
                        </a>
                    </li>
                {/each}

                {#if cross}
                    <li class="mt-2 border-t border-line pt-3">
                        <a
                            href="{base}{cross.href}"
                            onclick={close}
                            class="block py-2 text-base text-accent"
                        >
                            {cross.label}
                        </a>
                    </li>
                {/if}
            </ul>
        </nav>
    {/if}
</header>
