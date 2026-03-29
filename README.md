# Fin Sanctuary

Fin Sanctuary is a content and recommendation website for people in the United States who want an aquarium for their home or small office. The site is not intended for commercial aquarium installations. Its two core pillars are:

- An aquarium setup wizard that helps visitors choose the right tank, fish, equipment, and accessories based on their needs
- A large knowledge library covering aquarium topics such as fish types, diseases, food, filtration, substrate, lighting, and maintenance

Primary production domain:

- `https://finsanctuary.com`

The business model includes:

- Google AdSense placements
- Affiliate links inside guides and recommendation flows
- Direct sales of 3D-printed aquarium accessories
- Newsletter signup for repeat traffic and promotions

## Current Scope

The current project includes:

- A redesigned landing page
- Homepage pillar cards promoted to the top with centered banner artwork
- Fin Sanctuary branding with the `https://finsanctuary.com` production domain configured in Astro
- A structured aquarium wizard with setup recommendations, fish guidance, stocking plans, equipment bundles, and matched guides
- A scalable guides hub organized by topic
- Multiple published long-form guides plus placeholder cards for planned guides
- A reusable guide hero system with rounded artwork, per-guide layout controls, and support for image-specific display behavior
- Standardized square guide artwork on multiple published guides
- Canonical URLs and basic Open Graph metadata generated from the production site URL
- A shop page for 3D-printed accessories
- Gallery, About, and Contact pages
- Mobile navigation, light/dark mode support, and a shared editorial-style design system

## Product Direction

The long-term site structure is:

- `Wizard`: recommendation flow for tank size, fish style, equipment, accessories, and beginner fit
- `Guides`: educational content library organized by topic and skill level
- `Shop`: 3D-printed aquarium accessories made by the site owner
- `Gallery`: real tanks, accessories, and customer submissions
- `Newsletter`: aquarium tips, new products, and affiliate/promotional content
- `About` and `Contact`: trust-building pages for the brand

## Audience

- Home aquarium beginners
- Small-office aquarium buyers
- Hobbyists researching upgrades, equipment, fish compatibility, and maintenance
- Primarily USA-focused users for the first release

Excluded audience:

- Commercial tank installers
- Large-scale office, hospitality, or retail aquarium projects

## Brand Notes

Current project palette:

- `#0185AE`
- `#0DAFBC`
- `#8AC9AB`
- `#F3EFEE`
- `#E8D9BF`

Note: the original brief included `#F3WFEE`, which is not a valid hex code. This repo currently uses `#F3EFEE`.

## Stack

- Astro 6
- Tailwind CSS 4 via `@tailwindcss/vite`
- Static site output
- Astro content collections for guides

## Requirements

- Node `22.12.0+` or `24.x`
- npm `11+`

This repo intentionally blocks unsupported Node versions such as Node 25 because the current Astro toolchain can fail there with misleading build errors.

## Getting Started

Install dependencies:

```sh
npm install
```

Start the dev server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Deployment

For Cloudflare Pages, use:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22.12.0` or another supported `22.12+` / `24.x` release
- Root directory: repo root

The Astro site URL is configured as `https://finsanctuary.com` in `astro.config.mjs`, so canonical URLs and site-level metadata resolve against the production domain.

## Project Structure

```text
/
├── public/
│   └── images/
│       ├── home/
│       └── guides/
├── scripts/
│   └── check-node.mjs
├── src/
│   ├── content/
│   │   └── guides/
│   ├── data/
│   │   └── wizard.ts
│   ├── content.config.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── wizard.astro
│   │   ├── guides.astro
│   │   ├── guides/
│   │   │   └── [slug].astro
│   │   ├── shop.astro
│   │   ├── gallery.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
├── docs/
│   └── site-architecture.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Guide Format Standard

All current and future long-form guides should follow the same presentation pattern:

- long-form editorial article structure
- dynamic route rendering through `src/pages/guides/[slug].astro`
- frontmatter-driven content in `src/content/guides/*.md`
- optional hero artwork stored under `public/images/guides/`
- rounded-corner hero image presentation
- standard square guide-image rendering at `494 x 494 px` when square artwork is used
- per-guide hero controls through frontmatter when needed

Current supported guide frontmatter fields include:

- `heroImage`
- `heroImageAlt`
- `heroImageFit`
- `heroImageAspect`
- `heroLayout`
- `heroTitleSize`

These settings exist so a guide can keep the same overall template while adjusting image fit, image proportions, and header balance for specific artwork. The default expectation is that new guides should use the established guide layout first, then only use per-guide overrides when the artwork or title treatment genuinely requires it.

## Current Gaps

- Many planned guides still exist only as placeholder cards on the guides hub and need to be built one by one
- Product links, affiliate links, and gallery media still need real assets and live destinations
- AdSense, newsletter tooling, and analytics are not integrated yet
- Richer social/SEO metadata still needs to be expanded beyond the current basic canonical and Open Graph setup
- Some guide pages now support hero artwork, but most guides still need final branded images

## Published Guides

The current live long-form guides include:

- `Aquarium Filter Types Explained`
- `Choosing the Right Aquarium for Your Home or Office`
- `Common Aquarium Algae Problems and How to Fix Them`
- `Complete Beginner Tank Setup Guide 2026`
- `Freshwater vs Saltwater Aquariums`
- `Freshwater Community Fish`
- `Betta Tank Basics for Beginners`
- `The Nitrogen Cycle Explained: Why Cycling Your Tank Matters`
- `Step-by-Step Aquarium Setup Guide for Beginners`

Additional live short guides may still be expanded into full long-form versions over time.

## Planning Docs

Implementation planning lives in [docs/site-architecture.md](D:\Aquarium\Aquarium\docs\site-architecture.md).
