<script>
    // Renders prose stored as segments, so data files can accent phrases without
    // embedding markup: [{ text: 'Expertise in ' }, { text: 'gameplay', accent: true }]
    let { segments = [] } = $props();
</script>

{#each segments as segment}{#if segment.accent}<span class="text-accent">{segment.text}</span>{:else}{segment.text}{/if}{/each}
