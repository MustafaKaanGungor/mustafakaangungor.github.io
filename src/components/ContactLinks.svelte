<script>
    import { contacts } from '$lib/data/site.js';
    import Icon from './Icon.svelte';

    let { compact = false } = $props();
</script>

<ul class="flex flex-wrap {compact ? 'gap-5' : 'gap-3'}">
    {#each contacts as contact}
        <li>
            <a
                href={contact.href}
                target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                class={compact
                    ? 'inline-flex items-center gap-2 text-sm text-muted duration-200 hover:text-accent'
                    : 'inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted duration-200 hover:border-accent hover:text-accent'}
            >
                <Icon name={contact.icon} size={16} />
                {contact.label}
            </a>
        </li>
    {/each}
</ul>
