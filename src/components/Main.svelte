<script>
    import Step from "./Step.svelte";
    import photo from "$lib/images/ContactBG.jpg"
    import tapeover from "$lib/images/tapeover.jpg"
    import railwarden from "$lib/images/railwarden.png"
    import kitchenchaos from "$lib/images/kitchenchaos.jpg"
    import flood from "$lib/images/splash.png"

    let steps = [
        {
            name: "Railwarden",
            photo: railwarden,
            description:
                "A train defence game mixing endless runner with tower defence mechanics.",
            href:"https://store.steampowered.com/app/4480720/Railwarden/"
        },
        {
            name: "Dreamcore (WIP)",
            photo: photo,
            description:
                "A WIP action FPS platformer with fast paced combat and completely hand written unique sphere based movement",
            href:"https://bringsalavat.itch.io"
        },
        {
            name: "Tapeover",
            photo: tapeover,
            description:
                "A physics based platformer where player is playing as a tape",
            href:"https://woodenpillowgames.itch.io/tape-over"
        },
        {
            name: "Kitchen Chaos",
            photo: kitchenchaos,
            description:
                "Overcooked clone with multiplayer features",
                href:"https://bringsalavat.itch.io"
        },
        {
            name: "Million Year Flood",
            photo: flood,
            description:
                "Mechanical city tires to escape from a huge flood.",
                href:"https://bringsalavat.itch.io"
        },
        {
            name: "My Other Prototypes and Jam Games",
            photo: photo,
            description:
                "Many more games I did on various game jams are hosted on my Itch account",
                href:"https://bringsalavat.itch.io"
        }
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-36"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                <span class="poppins text-teal-400">Mustafa Kaan Güngör</span>
                <br />
                Unity Developer
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                Expertise in <span class="text-teal-400"> gameplay and system programming.</span> Familiar with multiplayer systems.
                Strong understanding of <span class="text-teal-400">algorithms and data structures,</span> ensuring efficient problem-solving and code optimization.
            </p>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <video src="/portfolio.mp4"
            autoplay
            muted
            loop
            playsinline
            class="w-full h-full rounded-lg object-cover">
            </video>
        </div>
    </section>

    <section class="py-20 lg:py-36 flex flex-col gap-2" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My Works
            </h3>
        </div>
        <div class="w-full max-w-3xl mx-auto aspect-video">
            <p class="text-center text-2xl py-5">Summary</p>
            <iframe
                src="https://www.youtube.com/embed/mExyyUo2Gno?si=eKj8f5e9X-JNCuWJ"
                title="YouTube video"
                class="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
        <div class="py-15"></div>
        <div>
            <p class="text-2xl text-center py-5">Details</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-10 w-full max-w-6xl mx-auto">
            <Step step={steps[0]}></Step>
            <Step step={steps[1]}></Step>
            <Step step={steps[2]}></Step>
            <Step step={steps[3]}></Step>
            <Step step={steps[4]}></Step>
            <Step step={steps[5]}></Step>
        </div>
    </section>

    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-36 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                About Me
            </h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div
                class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
            >
                <p class="text-base sm:text-lg md:text-xl">
                    I specialize in <span class="text-teal-400">gameplay and system programming.</span> 
                    My background in <span class="text-teal-400">algorithms and data structures</span> enables efficient problem-solving and code 
                    optimization across diverse software environments. In addition to game development, 
                    I develop <span class="text-teal-400">web applications</span> using <span class="text-teal-400">Svelte</span> for frontend development and <span class="text-teal-400">Spring</span> for backend architecture. 
                    I prioritize system stability and performance-oriented engineering in both game systems and full-stack web solutions.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-10">
                <a
                    href="/resume.pdf"
                    download
                    target="_blank"
                    class="p-3 sm:p-4 flex flex-col gap-2 rounded-xl max-w-m border border-solid text-center cursor-pointer group/item duration-200 border-teal-700 hover:border-teal-500"
                >                   
                    <h6 class="font-medium text-sm sm:text-base">
                        My CV
                    </h6>
                    <div class="rounded-xl border-teal-700 border border-solid relative flex place-content-center place-items-center rounded-b-2xl bg-linear-to-tl overflow-hidden from-teal-600 via-green-600 to-yellow-600">
                        <div class="opacity-0 p-5 group-hover/item:opacity-100 transition-all rounded-xl h-full w-full bg-cover bg-center object-scale-up" style="background-image: url({photo})">  
                        </div>
                        <p class="absolute">
                            Download CV
                        </p>
                    </div>
                </a>

                <a
                    href="/transkript.pdf"
                    download
                    target="_blank"
                    class="p-3 sm:p-4 flex flex-col gap-2 rounded-xl max-w-m border border-solid text-center cursor-pointer group/item duration-200 border-teal-700 hover:border-teal-500"
                >                   
                    <h6 class="font-medium text-sm sm:text-base">
                        Gazi University, Computer Engineering, CGPA: 3.16
                    </h6>
                    <div class="rounded-xl border-teal-700 border border-solid relative flex place-content-center place-items-center rounded-b-2xl bg-linear-to-tl overflow-hidden from-teal-600 via-green-600 to-yellow-600">
                        <div class="opacity-0 p-5 group-hover/item:opacity-100 transition-all rounded-xl h-full w-full bg-cover bg-center object-scale-up" style="background-image: url({photo})"> 
                            
                        </div>
                        <p class="absolute">
                            Download Transcript
                        </p>
                    </div>
                </a>
            </div>

            
        </div>
    </section>
</main>