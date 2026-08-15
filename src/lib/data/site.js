// Content shared by both tracks. Edit here once — /game and /it both pick it up.
//
// Paths to files in static/ are stored raw (leading slash, no base prefix).
// Prefix them with `base` from $app/paths at the point of use in a component.

export const site = {
    url: 'https://mustafakaangungor.net'
};

export const person = {
    name: 'Mustafa Kaan Güngör',
    location: 'Yenimahalle, Ankara, Türkiye',
    email: 'kaan062004@gmail.com',
    phoneHref: 'tel:+905061430161',
    phoneLabel: '+90 506 143 01 61',
    github: 'https://github.com/MustafaKaanGungor',
    linkedin: 'https://www.linkedin.com/in/mustafa-kaan-gungor/',
    itch: 'https://bringsalavat.itch.io'
};

export const education = {
    school: 'Gazi University',
    program: 'Computer Engineering, Faculty of Technology',
    year: '4th year',
    cgpa: '3.17',
    period: '2022 – Present',
    transcript: '/transcript.pdf'
};

export const languages = [
    { name: 'Turkish', level: 'Native' },
    { name: 'English', level: 'C1' }
];

// Same shape as a track's `experience` entries, so <Timeline> renders both.
export const organizations = [
    {
        role: 'Community President',
        company: 'Gazi University Digital Game Design Community',
        period: 'May 2024 – Nov 2025',
        bullets: [
            'Directed a 4-week Unity training program for community members.',
            'Coordinated technical Q&A panels with industry professionals.'
        ]
    },
    {
        role: 'Ankara Representative, Physical Organization Team',
        company: 'ÜNOG',
        period: 'Jan 2025 – Aug 2025',
        bullets: [
            'Coordinated logistics and operations for multiple physical networking events and developer meetups.'
        ]
    },
    {
        role: 'Social Media and Events Manager',
        company: 'Gazi University Entrepreneurship and Communication Community',
        period: 'Sep 2022 – Oct 2023',
        bullets: [
            'Managed event operations for the "Find Your Co-Founder" initiative at METU Technopark Startup Centrum.',
            'Ran organizational processes and field operations for the Girişim23 summit at ATO Congresium.'
        ]
    },
    {
        role: 'Game Development with Artificial Intelligence',
        company: 'Artificial Intelligence and Technology Academy',
        period: 'Nov 2024 – Jul 2025',
        bullets: [
            'Completed Project Management, Entrepreneurship and Unity courses delivered by Google.'
        ]
    }
];

export const contacts = [
    { label: 'Email', value: person.email, href: `mailto:${person.email}`, icon: 'mail' },
    { label: 'LinkedIn', value: 'mustafa-kaan-gungor', href: person.linkedin, icon: 'linkedin' },
    { label: 'GitHub', value: 'MustafaKaanGungor', href: person.github, icon: 'github' },
    { label: 'itch.io', value: 'bringsalavat', href: person.itch, icon: 'gamepad' }
];
