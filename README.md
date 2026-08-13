# Mustafa Kaan Güngör — Portfolio

Personal portfolio, split into two audience-specific tracks so recruiters see the relevant work.

| Page | URL |
|---|---|
| Chooser | [mustafakaangungor.net](https://mustafakaangungor.net) |
| Game development | [/game/](https://mustafakaangungor.net/game/) |
| IT / infrastructure | [/it/](https://mustafakaangungor.net/it/) |

Both tracks share one set of components and one design — only the content differs.

## Tech stack

- SvelteKit 2 · Svelte 5 (runes)
- Tailwind CSS v4
- Vite, prerendered to static HTML with `adapter-static`
- Hosted on GitHub Pages

## Getting started

```bash
npm install
npm run dev
```

## Editing content

All content lives in `src/lib/data/` — you should not need to touch markup.

- `site.js` — shared: contact details, education, organizations
- `game.js` / `it.js` — per-track hero, projects, experience, skills, CV link

To add a project, append one object to `projects.items` in the relevant track file. See [AGENTS.md](AGENTS.md) for the field reference and the bento grid sizing rules.

## Deployment

The build output in `docs/` **is** the live site and is committed to the repo.

```bash
npm run build
npm run preview
```

Then commit the source changes and `docs/` together and push to `master`. GitHub Pages serves `/docs` from that branch.

The custom domain is configured by `static/CNAME`, which the build copies into `docs/` — keep it in `static/`, otherwise the next build deletes it.

## Contact

- [LinkedIn](https://www.linkedin.com/in/mustafa-kaan-gungor/)
- [GitHub](https://github.com/MustafaKaanGungor)
- [itch.io](https://bringsalavat.itch.io)
