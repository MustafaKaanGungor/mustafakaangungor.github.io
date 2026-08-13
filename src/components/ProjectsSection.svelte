<script>
    import { reveal } from '$lib/actions/reveal.js';
    import ProjectTile from './ProjectTile.svelte';
    import SectionHeading from './SectionHeading.svelte';

    let { projects } = $props();
</script>

<section id="projects" class="py-24 sm:py-32">
    <div use:reveal class="reveal">
        <SectionHeading eyebrow="Projects" title={projects.heading} intro={projects.intro} />
    </div>

    {#if projects.items.length}
        <div class="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5 auto-rows-fr">
            {#each projects.items as project, i}
                <ProjectTile {project} delay={Math.min(i, 4) * 70} />
            {/each}
        </div>
    {:else if projects.emptyMessage}
        <div
            use:reveal
            class="reveal rounded-2xl border border-dashed border-line p-10 text-center text-muted"
        >
            {projects.emptyMessage}
        </div>
    {/if}

    {#if projects.showreel}
        <div use:reveal class="reveal mt-16 sm:mt-20 flex flex-col gap-4">
            <h3 class="font-display text-lg text-muted">{projects.showreel.label}</h3>
            <div class="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-line">
                <iframe
                    src={projects.showreel.src}
                    title={projects.showreel.title}
                    loading="lazy"
                    class="h-full w-full"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    {/if}
</section>
