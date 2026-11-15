## Pilar Luiz — Personal Website

My personal website: projects and writeups. Live at **https://piluiz.github.io**.

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

### Adding a project

Create a file in `src/content/projects/`. The filename becomes the URL (`my-thing.md` → `/projects/my-thing/`).

```markdown
---
title: "My Thing"
date: "Spring 2026"        # shown as-is
sort: 2026.3               # ordering: year + .3 spring / .6 summer / .9 fall
summary: "One line shown in project lists."
dek: "Intro paragraph at the top of the page. [Links](https://example.com) work here."
image: "/images/my-thing.png"   # put images in public/images
tags: ["C++", "FPGA"]
stack: ["C++", "FPGA", "Verilog"]
links:
  github: "https://github.com/piluiz/my-thing"
  report: "/documents/my-thing.pdf"   # put PDFs in public/documents
featured: true             # also show on the home page
---

## Overview

Write the rest in normal Markdown.
```

Other optional fields: `hideImage`, `imageCaption`, `draft` (hides the page). Link keys with nicer labels: `report`, `paper`, `video` (YouTube links are embedded), `github`, `demo`, `course`, `lab`, `makers`.

Use `.mdx` instead of `.md` to drop in components, like the animated pipeline diagram in `ooo-riscv.mdx`.

Experience lives in `src/data/experience.ts`.

### Deploy

```bash
npm run deploy
```

This builds to `dist/` and publishes it to the `gh-pages` branch. Give it a minute, then hard-refresh (Cmd+Shift+R).
