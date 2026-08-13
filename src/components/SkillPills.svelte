<script>
    let { groups = [] } = $props();
</script>

<div class="flex flex-col gap-6">
    <h3 class="font-display text-xs uppercase tracking-[0.25em] text-muted">Skills</h3>

    <div class="flex flex-col gap-5">
        {#each groups as group}
            <div class="flex flex-col gap-2">
                <p class="text-sm text-body">{group.group}</p>
                <ul class="flex flex-wrap gap-2">
                    {#each group.items as item}
                        <li
                            class="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
                        >
                            {item}
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</div>
