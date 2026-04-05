<script>
    let { step, children } = $props();
</script>

<a
    href={step.href}
    target="_blank"
    class="p-3 sm:p-4 flex flex-col gap-2 rounded-xl border border-solid text-center cursor-pointer group/item duration-200 border-teal-900 hover:border-teal-800"
>
    <div
        class="bg-teal-400 grid place-items-center px-3 text-2xl -mt-8 mx-auto duration-200"
    >
    </div>
    <div>
        <img src={step.photo} alt="" class="w-64 h-36 mx-auto"/>
    </div>
    <h6 class="font-medium text-sm sm:text-base">
        {step.name}
    </h6>                   
    <p class="text-xs">
        {step.description}   
    </p>  
</a>