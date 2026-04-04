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
- Homepage flow now opens with one clear “wizard vs guides” decision and a supporting trust strip instead of two competing hero sections
- Homepage pillar cards promoted to the top with centered banner artwork
- Shared header branding now uses a banner image instead of text
- Fin Sanctuary branding with the `https://finsanctuary.com` production domain configured in Astro
- A structured aquarium wizard with setup recommendations, fish guidance, stocking plans, equipment bundles, and matched guides
- Wizard hero now uses a centered single-card layout with image-first hierarchy inspired by the Planting Atlas wizard
- Wizard hero sizing has been tightened to a more compact final presentation
- Wizard results now include stronger next-step conversion paths to guides, shop, and email signup
- A scalable guides hub organized by topic
- Guides hub hero now uses a matching centered single-card, image-first Finpedia layout
- Guides hub now includes beginner “Start Here” recommendations and client-side search/filtering
- Multiple published long-form guides plus placeholder cards for planned guides
- A reusable guide hero system with rounded artwork, per-guide layout controls, and support for image-specific display behavior
- Standardized square guide artwork on multiple published guides
- Shared AdSense loader plus reusable inline ad blocks on the homepage, guides hub, guide pages, and wizard page
- Public trust/compliance pages for privacy, terms, affiliate disclosure, and advertising disclosure
- Canonical URLs and basic Open Graph metadata generated from the production site URL
- A shop page for 3D-printed accessories
- About page now leads with owner profile information, a real owner photo, and direct personal contact details for stronger authenticity
- Contact page now includes a role-based email directory plus live email-list signup
- Gallery page now supports live embedded YouTube video alongside a growing real-photo gallery structure
- Dedicated `Videos` and `Podcasts` sections now exist so media has its own site areas instead of living only inside the gallery
- `Videos` and `Podcasts` are now linked in the main site header on both desktop and mobile navigation
- Gallery, About, and Contact pages
- Mobile navigation, light/dark mode support, and a shared editorial-style design system

## Product Direction

The long-term site structure is:

- `Wizard`: recommendation flow for tank size, fish style, equipment, accessories, and beginner fit
- `Guides`: educational content library organized by topic and skill level
- `Shop`: 3D-printed aquarium accessories made by the site owner
- `Gallery`: real tanks, accessories, and customer submissions
- `Videos`: standalone pages for YouTube uploads and future video library growth
- `Podcasts`: standalone section for future episode pages and audio publishing
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
- Optional environment variable for the homepage ad block: `PUBLIC_ADSENSE_HOME_INLINE_SLOT=<your ad slot id>`
- Optional environment variable for the guides hub ad block: `PUBLIC_ADSENSE_GUIDES_HUB_SLOT=<your ad slot id>`
- Optional environment variable for guide-page inline ads: `PUBLIC_ADSENSE_GUIDE_INLINE_SLOT=<your ad slot id>`
- Optional environment variable for the wizard-page ad block: `PUBLIC_ADSENSE_WIZARD_INLINE_SLOT=<your ad slot id>`
- `public/ads.txt` is committed and should deploy to `https://finsanctuary.com/ads.txt`

The Astro site URL is configured as `https://finsanctuary.com` in `astro.config.mjs`, so canonical URLs and site-level metadata resolve against the production domain.

## Contact Channels

The live site currently uses these contact addresses:

- `drodge00@finsanctuary.com` for direct personal contact with Dave
- `info@finsanctuary.com` for general questions and business inquiries
- `support@finsanctuary.com` for product help and troubleshooting
- `newsletter@finsanctuary.com` for newsletter-related communication

These addresses are surfaced on the About and Contact pages so visitors can choose the right inbox instead of relying only on the generic contact form.

## Trust and Compliance

The live site now includes public trust/compliance pages for:

- `Privacy Policy`
- `Terms of Use`
- `Affiliate Disclosure`
- `Advertising Disclosure`

These pages are linked in the footer and surfaced where commercial context matters, including guides, shop, and contact flows. They are intended to improve visitor trust and support transparent AdSense and affiliate use.

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
│   │   ├── videos.astro
│   │   ├── podcasts.astro
│   │   ├── guides/
│   │   │   └── [slug].astro
│   │   ├── videos/
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

## Media Architecture

The site now supports dedicated media sections beyond the gallery:

- `src/content/videos/*.md` holds individual video entries
- `src/pages/videos.astro` is the videos hub and now renders videos as tiles with thumbnails, titles, descriptions, and direct YouTube links
- `src/pages/podcasts.astro` is the podcast hub and landing page for future episode publishing

The gallery can still feature media, but videos no longer need to live only as gallery embeds. The current site model uses a simple video-library page rather than separate on-site video detail URLs.

## UX Direction

Recent site-improvement work focused on:

- clearer first-click homepage flow
- stronger trust signaling for AdSense and affiliate readiness
- less “placeholder” framing on production pages
- better guide discovery with search and beginner entry points
- stronger conversion paths from guides and wizard results into shop and email signup

## Current Gaps

- Many planned guides still exist only as placeholder cards on the guides hub and need to be built one by one
- Product links, affiliate links, and gallery media still need real assets and live destinations
- AdSense loader and inline ad blocks are wired, but real ad delivery still requires live slot IDs in deployment environment variables
- Newsletter tooling and analytics still need deeper integration beyond the current Formspree-based signup capture
- Richer social/SEO metadata still needs to be expanded beyond the current basic canonical and Open Graph setup
- Some guide pages now support hero artwork, but most guides still need final branded images

## Published Guides

The current live long-form guides include:

- `Aquarium Filter Types Explained`
- `Aquarium Lighting Guide`
- `Best Beginner Fish for Small Home and Office Tanks`
- `Budget Aquarium Setup Under $200`
- `Cichlid Tank Basics`
- `Choosing the Right Aquarium for Your Home or Office`
- `Common Aquarium Algae Problems and How to Fix Them`
- `Complete Beginner Tank Setup Guide 2026`
- `Essential Aquarium Equipment You Actually Need`
- `Filtration Systems for Small Aquariums`
- `Freshwater vs Saltwater Aquariums`
- `Freshwater Community Fish`
- `Goldfish Care Myths Busted`
- `How Often to Do Water Changes (and Why)`
- `Betta Tank Basics for Beginners`
- `The Nitrogen Cycle Explained: Why Cycling Your Tank Matters`
- `Step-by-Step Aquarium Setup Guide for Beginners`
- `Upgrading Your Aquarium: When and How to Scale Up`
- `Water Parameters 101: Testing and Maintaining Ideal Conditions`
- `Weekly Aquarium Maintenance Routine for Busy Owners`

Additional live short guides may still be expanded into full long-form versions over time.

## Planning Docs

Implementation planning lives in [docs/site-architecture.md](D:\Aquarium\Aquarium\docs\site-architecture.md).
