<script>
    let { contact, children } = $props();
</script>

<a
    class="group/item flex flex-col rounded-2xl hover:rounded-3xl bg-green-100 dark:bg-teal-900 hover:bg-green-200 dark:hover:bg-teal-800 overflow-hidden transition-all h-full"
    href={contact.href}
>
    <div
        class="relative flex place-content-center place-items-center rounded-b-2xl bg-linear-to-tl overflow-hidden from-teal-600 via-green-600 to-yellow-600"
    >
        <div class="opacity-0 group-hover/item:opacity-100 transition-all rounded-b-2xl h-48 w-full bg-cover bg-center object-scale-down" style="background-image: url({contact.image})"> </div>
        <div
            class="absolute rounded-full flex fill-teal-800 bg-linear-to-bl from-teal-300 via-green-200 to-yellow-100 p-2"
        >
            <img src={contact.icon} alt={contact.title} class="w-15 h-15 object-contain">
        </div>
    </div>
    <div class="px-6 py-6">
        <p class="text-xl font-semibold">{contact.title}</p>
    </div>
</a>
