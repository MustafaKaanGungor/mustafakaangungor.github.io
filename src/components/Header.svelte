<script>
    import { browser } from '$app/environment';
    
    let y = $state(0);

    if (browser) {
        y = window.scrollY;
        window.addEventListener('scroll', () => {
            y = window.scrollY;
        });
    }

    let tabs = [
        {name: 'Projects', link:'#projects'},
        {name: 'About Me', link:'#about'},
        {name: 'Contact', link:'#contact'}
    ];
</script>

<svelte:window onscroll={() => y = window.scrollY} />

<header class={'sticky z-10 top-0 duration-200 px-6 flex items-center justify-between border-b border-solid ' + 
    (
        y > 0 ? 'py-4 bg-slate-950 border-teal-900' : 'py-6 bg-transparent border-transparent'
    )}>
    <a href>
        <h1 class="font-medium">
            <p class="poppins text-3xl">Mustafa Kaan Güngör</p>
        </h1>
    </a>

    <div class="sm:flex items-center gap-8 hidden">
        {#each tabs as tab, index}
            <a href={tab.link} class="duration-200 hover:text-violet-400">
                <p class="text-2xl">{tab.name}</p>
            </a>
        {/each}
    </div>
</header>