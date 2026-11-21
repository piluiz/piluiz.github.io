## Pilar Luiz — Personal Website

My personal website: projects and writeups. Live at **https://piluiz.github.io**.

### A note on this site

I've gone through many iterations of a personal website, and every one started to look dated fast. Pretty much everything I learned in my web dev classes is obsolete by now too. This time I decided simple is best. I chose the design (black, white, and butter yellow, IBM Plex type, a "Hello, world!" up top) and wrote all the content and project writeups myself, then used Claude to speed up the implementation so I could spend my time on the projects themselves.

### Tech stack

- [Astro](https://astro.build) (static site, Markdown/MDX content)
- Plain CSS (`src/styles/global.css`): black, white, and butter yellow; IBM Plex Serif + IBM Plex Mono, Luckiest Guy for the "Hello, world!"
- Hosted on GitHub Pages via the `gh-pages` branch

### Setup

Requires Node 22+ (`.nvmrc` is included, so `nvm use` picks the right version).

```bash
nvm use
npm install
npm run dev        # http://localhost:4321
```

### Deploy

```bash
npm run deploy
```

This builds to `dist/` and publishes it to the `gh-pages` branch. Give it a minute, then hard-refresh (Cmd+Shift+R).
