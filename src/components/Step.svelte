<script>
    let { step, children } = $props();
</script>

<a
    href={step.href}
    target="_blank"
    rel="noopener noreferrer"
    class="p-3 sm:p-4 flex flex-col gap-2 rounded-xl border border-solid text-center cursor-pointer group/item duration-200 border-teal-700 hover:border-teal-500"
>
    <div
        class="bg-teal-400 grid place-items-center px-3 text-2xl -mt-8 mx-auto duration-200"
    >
    </div>
    <div>
        <img src={step.photo} alt="projectPhoto" loading="lazy" class="w-full h-36"/>
    </div>
    <h6 class="font-medium text-sm sm:text-base">
        {step.name}
    </h6>                   
    <p class="text-xs">
        {step.description}   
    </p>  
</a>