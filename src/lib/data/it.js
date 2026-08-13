// IT / infrastructure track. To add a project, append one object to
// `projects.items` — no markup changes. Projects without an `image` fall back to
// an icon tile, and `href: null` renders the tile as a div instead of a link.
//
// `size` drives the bento layout on a 6-column grid: 'lg' (4 cols x 2 rows),
// 'md' (3 cols), 'sm' (2 cols). Keep each row summing to 6.
export default {
    id: 'it',
    label: 'IT / Infrastructure',
    blurb: 'Linux, AWS, Nginx, Docker and CI/CD — deploying, securing and monitoring production systems.',
    icon: 'server',
    path: '/it/',

    meta: {
        title: 'Mustafa Kaan Güngör — IT & Infrastructure',
        description:
            'Computer engineering student working on Linux, AWS, Nginx, Docker, CI/CD and server hardening.',
        ogImage: null
    },

    hero: {
        eyebrow: 'IT &',
        role: 'Infrastructure',
        tagline: [
            { text: 'I deploy, secure and monitor ' },
            { text: 'production Linux systems', accent: true },
            { text: ' — AWS, Nginx, TLS, Docker and CI/CD — backed by a development background in ' },
            { text: 'C#, Python and Bash', accent: true },
            { text: '.' }
        ],
        media: null
    },

    projects: {
        heading: 'Selected Work',
        intro: 'Infrastructure and platform work. More write-ups are on the way.',
        emptyMessage:
            'Project write-ups are on the way. In the meantime, see the experience timeline below or my GitHub.',
        showreel: null,
        items: [
            {
                name: 'Production Deployment & Hardening',
                image: null,
                icon: 'server',
                description:
                    "Deployed a public-facing application on AWS EC2 behind Nginx with Cloudflare DNS and Let's Encrypt (TLS + HSTS), automated releases through GitHub Actions, and hardened the server baseline with SSH key-only auth, fail2ban and UFW.",
                href: null,
                tech: ['AWS EC2', 'Nginx', 'Cloudflare', "Let's Encrypt", 'GitHub Actions', 'fail2ban', 'UFW'],
                size: 'md'
            },
            {
                name: 'This Portfolio',
                image: null,
                icon: 'code',
                description:
                    'Static site built with SvelteKit and Tailwind, prerendered to plain HTML and served from GitHub Pages on a custom apex domain.',
                href: 'https://github.com/MustafaKaanGungor/mustafakaangungor.github.io',
                linkLabel: 'GitHub',
                tech: ['SvelteKit', 'Tailwind v4', 'GitHub Pages', 'DNS'],
                size: 'md'
            }
        ]
    },

    experience: [
        {
            role: 'IT Intern',
            company: 'Beam Teknoloji',
            period: 'Jul 2026 – Present',
            bullets: [
                "Deployed and secured a public-facing application on AWS EC2 utilizing Nginx, Cloudflare DNS, and Let's Encrypt (TLS + HSTS) with a GitHub Actions CI/CD pipeline for automated deployments.",
                'Developed custom security and observability tools using Python and Bash to monitor system infrastructure.',
                'Hardened server baseline configuration (SSH key-only auth, fail2ban, UFW rules) and documented the setup as a runbook for the team.'
            ]
        },
        {
            role: 'Unity Developer',
            company: 'Indie Game Studio, ATOM',
            location: 'ODTÜ Teknokent, Ankara',
            period: 'Jan 2025 – Present',
            bullets: [
                'Primary programmer on a released physics-based platformer and 4 prototypes; own gameplay architecture and core logic in C# within a team of 5.',
                "Ship cross-platform (Mobile/PC) builds and maintain the project's Git branching and build workflow across the team."
            ]
        }
    ],

    skills: [
        {
            group: 'Programming Languages',
            items: ['C# (Upper-Intermediate)', 'Python (Intermediate)', 'Java (Intermediate)']
        },
        {
            group: 'Development & Frameworks',
            items: ['Unity (3D, 2D, VR/AR)', 'Svelte', 'Spring Boot']
        },
        {
            group: 'Infrastructure & Administration',
            items: ['Docker', 'Linux', 'Nginx', 'Zabbix', 'Ansible', 'AWS', 'Bash']
        },
        {
            group: 'Version Control',
            items: ['Git', 'GitHub']
        }
    ],

    cv: {
        label: 'IT CV',
        file: '/MustafaKaanGungor-CV-IT.pdf'
    }
};
