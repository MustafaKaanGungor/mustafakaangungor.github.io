<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	import "../app.css";
    import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	let y = $state(0);
	let innerHeight = $state(0);
	let innerWidth = $state(0);

	function goTop() {
		document.body.scrollIntoView()
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="relative flex flex-col max-w-360 mx-auto w-full text-sm sm:text-base min-h-screen">
	
	<Header />
	{@render children()}
	<Footer/>

	<div class={"fixed bottom-0 w-full duration-200 flex p-10 z-10 " + (
		y > 0 ? ' opacity-full pointer-events-auto': ' opacity-0 pointer-events-none'
	)}>
		<button title="" onclick={goTop()} class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 py-3 hover:bg-slate-800 cursor-pointer">
			<i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i>
		</button>
	</div>
	
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth/>
