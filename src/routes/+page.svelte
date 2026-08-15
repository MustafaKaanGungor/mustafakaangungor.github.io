<script>
    import { person, site } from '$lib/data/site.js';
    import { trackList } from '$lib/data/tracks.js';
    import Footer from '../components/Footer.svelte';
    import Header from '../components/Header.svelte';
    import TrackCard from '../components/TrackCard.svelte';

    const title = 'Mustafa Kaan Güngör — Portfolio';
    const description =
        'Computer engineering student in Ankara. Two portfolios: game development and IT / infrastructure.';
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href="{site.url}/" />

    <meta property="og:type" content="profile" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content="{site.url}/" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
</svelte:head>

<Header brand={person.name} home="/" />

<main class="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16 sm:py-24">
    <div class="flex flex-col gap-6">
        <h1
            class="font-display text-[clamp(2rem,7.5vw,4.5rem)] font-extrabold tracking-tight leading-[0.95] break-words"
        >
            {person.name}
        </h1>

        <p class=" text-base sm:text-lg text-muted leading-relaxed">
            Computer engineering student at Gazi University. I build
            <span class="text-accent">games in Unity</span>
            and run
            <span class="text-accent">Linux infrastructure</span>.
        </p>
    </div>

    <div class="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {#each trackList as track, i}
            <TrackCard {track} delay={i * 90} />
        {/each}
    </div>
</main>

<div class="mx-auto w-full max-w-5xl px-6">
    <Footer compact />
</div>
