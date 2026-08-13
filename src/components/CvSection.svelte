<script>
    import { base } from '$app/paths';
    import { reveal } from '$lib/actions/reveal.js';
    import { education, languages, organizations } from '$lib/data/site.js';
    import Icon from './Icon.svelte';
    import SectionHeading from './SectionHeading.svelte';
    import SkillPills from './SkillPills.svelte';
    import Timeline from './Timeline.svelte';

    let { track } = $props();
</script>

<section id="cv" class="py-24 sm:py-32 border-t border-line">
    <div use:reveal class="reveal">
        <SectionHeading
            eyebrow="Background"
            title="CV Summary"
            intro="The short version. Download the full CV for everything else."
        />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-14 lg:gap-16">
        <div class="flex flex-col gap-14">
            <Timeline heading="Experience" items={track.experience} />
            <Timeline heading="Communities & Organizations" items={organizations} />
        </div>

        <div class="flex flex-col gap-12">
            <div use:reveal class="reveal flex flex-col gap-4">
                <h3 class="font-display text-xs uppercase tracking-[0.25em] text-muted">Education</h3>
                <div class="rounded-2xl border border-line bg-surface p-5 flex flex-col gap-2">
                    <p class="font-display text-lg font-semibold tracking-tight">{education.school}</p>
                    <p class="text-sm text-muted">{education.program}</p>
                    <p class="text-sm text-muted">
                        {education.year} · CGPA <span class="text-accent">{education.cgpa}</span> · {education.period}
                    </p>
                    <a
                        href="{base}{education.transcript}"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-2 inline-flex w-fit items-center gap-2 text-sm text-muted duration-200 hover:text-accent"
                    >
                        <Icon name="file" size={16} />
                        Transcript
                    </a>
                </div>
            </div>

            <div use:reveal class="reveal">
                <SkillPills groups={track.skills} />
            </div>

            <div use:reveal class="reveal flex flex-col gap-4">
                <h3 class="font-display text-xs uppercase tracking-[0.25em] text-muted">Languages</h3>
                <ul class="flex flex-col gap-1">
                    {#each languages as language}
                        <li class="text-sm text-muted">
                            {language.name} <span class="text-body">· {language.level}</span>
                        </li>
                    {/each}
                </ul>
            </div>

            <a
                use:reveal
                href="{base}{track.cv.file}"
                download
                target="_blank"
                rel="noopener noreferrer"
                class="reveal group flex items-center justify-between gap-4 rounded-2xl border border-accent/40 bg-accent/5 px-5 py-4 duration-200 hover:bg-accent/10 hover:border-accent"
            >
                <span class="flex flex-col">
                    <span class="font-display font-semibold tracking-tight">Download CV</span>
                    <span class="text-xs text-muted">{track.cv.label} · PDF</span>
                </span>
                <span class="text-accent duration-200 group-hover:translate-y-0.5">
                    <Icon name="download" size={22} />
                </span>
            </a>
        </div>
    </div>
</section>
