import railwarden from '$lib/images/railwarden.png';
import map from '$lib/images/map.png';
import tapeover from '$lib/images/tapeover.jpg';
import kitchenchaos from '$lib/images/kitchenchaos.jpg';
import flood from '$lib/images/splash.png';

// Game development track. To add a project, append one object to `projects.items`
// — no markup changes. `size` drives the bento layout: 'lg' (4 cols x 2 rows),
// 'md' (3 cols), 'sm' (2 cols) on a 6-column grid. Keep each row summing to 6.
export default {
    id: 'game',
    label: 'Game Development',
    blurb: 'Unity gameplay and systems programming — shipped titles, prototypes and jam games.',
    icon: 'gamepad',
    path: '/game/',

    meta: {
        title: 'Mustafa Kaan Güngör — Unity Developer',
        description:
            'Unity developer specialising in gameplay and system programming. Railwarden, Tapeover, Kitchen Chaos and more.',
        ogImage: null
    },

    hero: {
        eyebrow: 'Unity',
        role: 'Developer',
        tagline: [
            { text: 'Expertise in ' },
            { text: 'gameplay and system programming', accent: true },
            { text: ', familiar with multiplayer systems. A strong foundation in ' },
            { text: 'algorithms and data structures', accent: true },
            { text: ' keeps the code efficient and the problems solvable.' }
        ],
        media: null
    },

    projects: {
        heading: 'Selected Work',
        intro: 'Shipped games, studio prototypes and game jam entries.',
        emptyMessage: null,
        showreel: {
            label: 'Showreel',
            src: 'https://www.youtube.com/embed/nUNwTsyT9nw?si=o5SOKJztLC_4dgTc',
            title: 'Mustafa Kaan Güngör — game development showreel'
        },
        items: [
            {
                name: 'Railwarden',
                image: railwarden,
                description:
                    'A train defence game mixing endless runner movement with tower defence mechanics.',
                href: 'https://store.steampowered.com/app/4480720/Railwarden/',
                linkLabel: 'Steam',
                tech: ['Unity', 'C#'],
                size: 'lg'
            },
            {
                name: 'Tapeover',
                image: tapeover,
                description: 'A physics-based platformer where you play as a roll of tape.',
                href: 'https://woodenpillowgames.itch.io/tape-over',
                linkLabel: 'itch.io',
                tech: ['Unity', 'C#'],
                size: 'sm'
            },
            {
                name: 'Kitchen Chaos',
                image: kitchenchaos,
                description: 'An Overcooked-style co-op cooking game with multiplayer.',
                href: 'https://bringsalavat.itch.io',
                linkLabel: 'itch.io',
                tech: ['Unity', 'Netcode'],
                size: 'sm'
            },
            {
                name: 'Million Year Flood',
                image: flood,
                description: 'A mechanical city tries to outrun an enormous flood.',
                href: 'https://github.com/MustafaKaanGungor/MillionYearFlood',
                linkLabel: 'GitHub',
                tech: ['Unity', 'C#'],
                size: 'sm'
            },
            {
                name: 'Map the Islands',
                image: map,
                description: 'A map drawing cartography game.',
                href: 'https://ruhan07.itch.io/map-the-islands',
                linkLabel: 'itch.io',
                tech: ['Unity', 'C#'],
                size: 'sm'
            },
            {
                name: 'Prototypes & Jam Games',
                // Catch-all tile — an icon reads better here than one game's screenshot.
                image: null,
                icon: 'gamepad',
                description: 'More games from various game jams, hosted on my itch.io account.',
                href: 'https://bringsalavat.itch.io',
                linkLabel: 'itch.io',
                tech: ['Game jams'],
                size: 'sm'
            }
        ]
    },

    experience: [
        {
            role: 'Unity Developer',
            company: 'Indie Game Studio, ATOM',
            location: 'ODTÜ Teknokent, Ankara',
            period: 'Jan 2025 – Present',
            bullets: [
                'Programmed core mechanics for 4 distinct game prototypes in collaboration with teams of 2D and 3D artists.',
                'Developed and released a physics-based platformer on itch.io.',
                'Implementing gameplay architecture and core logic as the primary programmer for an unannounced indie title.',
                'Designing core gameplay loops and systems for "Capital Empire", a cross-platform (Mobile/PC) strategy game.',
                'Executing pre-launch marketing strategies and community management for "The Facility", an upcoming indie horror title on Steam.'
            ]
        },
        {
            role: 'IT Intern',
            company: 'Beam Teknoloji',
            period: 'Jul 2026 – Present',
            bullets: [
                "Deployed and secured a public-facing application on AWS EC2 utilizing Nginx, Cloudflare DNS, and Let's Encrypt (TLS + HSTS) with a GitHub Actions CI/CD pipeline for automated deployments.",
                'Developed custom security and observability tools using Python and Bash to monitor system infrastructure.'
            ]
        }
    ],

    skills: [
        {
            group: 'Engines & Tools',
            items: ['Unity (3D, 2D, VR/AR)', 'Unity Profiler', 'Cinemachine', 'DOTween', 'Git', 'GitHub']
        },
        {
            group: 'Programming Languages',
            items: ['C# (Upper-Intermediate)', 'Python (Intermediate)', 'Java (Intermediate)']
        },
        {
            group: 'Infrastructure & Administration',
            items: ['Docker', 'Linux', 'Nginx', 'Zabbix', 'Ansible', 'AWS', 'Bash']
        }
    ],

    cv: {
        label: 'Game Development CV',
        file: '/MustafaKaanGungor-CV-Game.pdf'
    }
};
