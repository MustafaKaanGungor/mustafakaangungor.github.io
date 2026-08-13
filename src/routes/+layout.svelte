<script>
	import '../app.css';
	import Icon from '../components/Icon.svelte';

	let { children } = $props();

	// Header and footer are rendered per page — their content differs by track.
	let y = $state(0);

	function goTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window bind:scrollY={y} />

<div class="relative flex min-h-screen w-full flex-col">
	{@render children()}

	<div
		class="fixed bottom-6 right-6 z-40 duration-300 {y > 600
			? 'pointer-events-auto opacity-100'
			: 'pointer-events-none opacity-0'}"
	>
		<button
			type="button"
			aria-label="Back to top"
			onclick={goTop}
			tabindex={y > 600 ? 0 : -1}
			class="grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface text-muted duration-200 hover:border-accent hover:text-accent"
		>
			<Icon name="arrow-up" size={18} />
		</button>
	</div>
</div>
