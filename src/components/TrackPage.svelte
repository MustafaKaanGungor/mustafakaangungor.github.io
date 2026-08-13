<script>
    import { person, site } from '$lib/data/site.js';
    import CvSection from './CvSection.svelte';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
    import Hero from './Hero.svelte';
    import ProjectsSection from './ProjectsSection.svelte';

    let { track } = $props();

    let canonical = $derived(site.url + track.path);

    let tabs = $derived(
        [
            track.projects.items.length || track.projects.emptyMessage
                ? { name: 'Projects', link: '#projects' }
                : null,
            { name: 'CV', link: '#cv' },
            { name: 'Contact', link: '#contact' }
        ].filter(Boolean)
    );
</script>

<svelte:head>
    <title>{track.meta.title}</title>
    <meta name="description" content={track.meta.description} />
    <link rel="canonical" href={canonical} />

    <meta property="og:type" content="profile" />
    <meta property="og:title" content={track.meta.title} />
    <meta property="og:description" content={track.meta.description} />
    <meta property="og:url" content={canonical} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={track.meta.title} />
    <meta name="twitter:description" content={track.meta.description} />

    {#if track.meta.ogImage}
        <meta property="og:image" content={site.url + track.meta.ogImage} />
        <meta name="twitter:image" content={site.url + track.meta.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
    {/if}
</svelte:head>

<Header brand={person.name} home="/" {tabs} />

<main class="mx-auto w-full max-w-6xl flex-1 px-6">
    <Hero hero={track.hero} cv={track.cv} />
    <ProjectsSection projects={track.projects} />
    <CvSection {track} />
    <Footer />
</main>
