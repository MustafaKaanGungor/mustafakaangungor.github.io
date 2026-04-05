<script>
    import ContactCard from './ContactCard.svelte';
    import bg from "$lib/images/ContactBG.jpg";
    import emailIcon from "$lib/images/email.png";
    import linkedinIcon from "$lib/images/linkedin.png";
    import phoneIcon from "$lib/images/phone-call.png";


    const contacts = [
        { title: 'Email', href: 'mailto:kaan062004@gmail.com', image: bg, icon: emailIcon},
        { title: 'Phone', href: 'tel:+905061430161', image: bg, icon: phoneIcon},
        { title: 'LinkedIn', href: 'https://www.linkedin.com/in/mustafa-kaan-gungor/', image: bg, icon: linkedinIcon},
    ];
</script>

<footer
    id="contact"
    class="py-10 sm:py-24 border-t border-solid border-teal-900 flex flex-col gap-4 sm:gap-8 justify-center items-center"
>
    <h1 class="text-white text-3xl sm:text-4xl md:text-5xl">
        Contact me
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto px-4">
        {#each contacts as contact}
            <ContactCard {contact}>
            </ContactCard>
        {/each}
    </div>
</footer>