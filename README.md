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
- A dedicated `Start Here` page now gives true beginners a simpler first path through planning, wizard use, and core setup guides
- A scalable guides hub organized by topic
- Guides hub hero now uses a matching centered single-card, image-first Finpedia layout
- Guides hub now includes beginner “Start Here” recommendations and client-side search/filtering
- Multiple published long-form guides plus placeholder cards for planned guides
- A reusable guide hero system with rounded artwork, per-guide layout controls, and support for image-specific display behavior
- Standardized square guide artwork on multiple published guides
- Shared AdSense loader plus reusable inline ad blocks on the homepage, guides hub, guide pages, and wizard page
- A lightweight GA4-ready analytics layer with tracked newsletter submits, CTA clicks, shop-interest clicks, guide next-step clicks, email-link clicks, and wizard completion events
- Analytics coverage now extends across onboarding, media outbound clicks, newsletter continuation, and direct-contact paths
- Public trust/compliance pages for privacy, terms, affiliate disclosure, and advertising disclosure
- Canonical URLs, richer Open Graph/Twitter metadata, and structured data generated from the production site URL
- Dedicated OG preview images now exist for the homepage, guides hub, wizard, shop, gallery, about, and start-here pages
- `robots.txt` and generated `sitemap.xml` support are now included for crawler readiness
- A shop page that now points visitors to the live Pixels and Chisels Etsy storefront while keeping fit guidance and custom-print questions on-site
- About page now leads with owner profile information, a real owner photo, and direct personal contact details for stronger authenticity
- Contact page now includes a role-based email directory plus live email-list signup
- Guide pages and the shop page now use a shared newsletter signup card for cleaner conversion flow
- The site now includes a dedicated newsletter landing page and confirmation page instead of relying only on scattered signup forms
- Gallery, videos, podcasts, and contact now use clearer next-step and signup paths instead of passive dead-end layouts
- Gallery page now supports live embedded YouTube video alongside a growing real-photo gallery structure
- Dedicated `Videos` and `Podcasts` sections now exist so media has its own site areas instead of living only inside the gallery
- `Videos` and `Podcasts` are now linked in the main site header on both desktop and mobile navigation
- `Start Here` is now linked in the main site header, footer, homepage, and guides hub for beginner onboarding
- Gallery, About, and Contact pages
- Mobile navigation, light/dark mode support, and a shared editorial-style design system

## Product Direction

The long-term site structure is:

- `Wizard`: recommendation flow for tank size, fish style, equipment, accessories, and beginner fit
- `Start Here`: beginner-first onboarding route for first-time visitors
- `Guides`: educational content library organized by topic and skill level
- `Shop`: 3D-printed aquarium accessories made by the site owner, with Etsy as the public ordering path
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
- Optional environment variable for GA4 event collection: `PUBLIC_GA_MEASUREMENT_ID=<your GA4 measurement id>`
- Optional environment variable for a future newsletter provider endpoint: `PUBLIC_NEWSLETTER_ACTION=<your form action url>`
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
│   ├── ads.txt
│   ├── robots.txt
│   └── images/
│       ├── og/
│       ├── home/
│       └── guides/
├── scripts/
│   └── check-node.mjs
├── src/
│   ├── components/
│   │   └── NewsletterSignupCard.astro
│   ├── content/
│   │   └── guides/
│   ├── data/
│   │   ├── newsletter.ts
│   │   └── wizard.ts
│   ├── content.config.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── sitemap.xml.ts
│   │   ├── start-here.astro
│   │   ├── wizard.astro
│   │   ├── newsletter.astro
│   │   ├── newsletter-confirmation.astro
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
│   ├── analytics-events.md
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
- stronger beginner onboarding for first-time visitors
- stronger trust signaling for AdSense and affiliate readiness
- less “placeholder” framing on production pages
- better guide discovery with search and beginner entry points
- stronger conversion paths from guides, shop, and wizard results into email signup and next actions

## Newsletter and Conversion Flow

The site currently uses a shared newsletter action and shared conversion patterns instead of disconnected placeholder boxes.

Current conversion surfaces include:

- dedicated `/newsletter` landing page
- dedicated `/newsletter-confirmation` page after signup
- homepage email signup for guide and product updates
- contact-page email signup plus direct inbox routing
- shared newsletter signup card on guide pages
- shared newsletter signup card on the shop page
- shared newsletter signup card on videos, podcasts, and gallery pages
- wizard result CTA block pointing visitors to guides, shop, and email signup
- tracked CTA and conversion surfaces across the homepage, guides, contact, shop, and wizard

The shop page now uses the live Pixels and Chisels Etsy storefront as its public ordering path. Visitors can browse the accessory lineup, click through to Etsy, ask about custom prints or fit, and join the list for new product drops.

This keeps the major decision pages focused on a clearer next action instead of dropping visitors into dead ends.

The newsletter system is now centralized in the repo:

- one shared signup component
- one shared newsletter action config in `src/data/newsletter.ts`
- source tagging preserved across all signup locations
- a dedicated signup page and confirmation page for cleaner UX

The current analytics/event layer is intentionally lightweight:

- GA4 can be enabled with `PUBLIC_GA_MEASUREMENT_ID`
- events safely push through `window.dataLayer` even before GA4 is configured
- current tracked actions include newsletter submits, contact form submits, major CTA clicks, shop-interest clicks, email-link clicks, guide navigation/related clicks, wizard completion events, media outbound clicks, and Start Here/onboarding choices
- event definitions and recommended first reports are documented in `docs/analytics-events.md`

## SEO and Metadata

The site now includes a stronger metadata baseline for search engines and link previews:

- canonical URLs generated from `https://finsanctuary.com`
- richer Open Graph and Twitter card metadata through the shared layout
- dedicated OG preview images for the main non-guide page types
- Organization and WebSite JSON-LD on the shared layout
- Article JSON-LD plus article metadata on guide pages
- `public/robots.txt`
- generated sitemap route at `/sitemap.xml`

This phase improves how the site presents in search results, crawlers, and social sharing without changing the editorial page structure.

## Current Gaps

- Many planned guides still exist only as placeholder cards on the guides hub and need to be built one by one
- The shop now has the live Etsy storefront path, but it still needs a fuller set of real product listings, real product media, and tighter guide-to-product matching
- Affiliate links and gallery media still need real assets and live destinations
- AdSense loader and inline ad blocks are wired, but real ad delivery still requires live slot IDs in deployment environment variables
- Newsletter tooling still needs deeper integration beyond the current Formspree-based signup capture
- Analytics now has a baseline event layer, but it still needs a real reporting/dashboard workflow and broader outbound-click instrumentation
- Social preview artwork now covers the core page types, but it can still be improved further with more custom guide-level preview assets and richer media-specific variants
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
- `Community Tank Compatibility Guide`
- `Complete Beginner Tank Setup Guide 2026`
- `Essential Aquarium Equipment You Actually Need`
- `Emergency Aquarium Troubleshooting Guide`
- `Filtration Systems for Small Aquariums`
- `Freshwater vs Saltwater Aquariums`
- `Freshwater Community Fish`
- `Goldfish Care Myths Busted`
- `How Often to Do Water Changes (and Why)`
- `Identifying and Treating Common Fish Diseases`
- `Invertebrate Care: Snails, Shrimp & Crayfish in Small Tanks`
- `Live Plants vs Artificial Plants: Which Is Best for You?`
- `Betta Fish Care: Solo Tanks, Feeding & Enrichment`
- `The Nitrogen Cycle Explained: Why Cycling Your Tank Matters`
- `Safe Acclimation Techniques for New Fish and Shrimp`
- `Setting Up a Low-Maintenance Planted Aquarium`
- `Step-by-Step Aquarium Setup Guide for Beginners`
- `Upgrading Your Aquarium: When and How to Scale Up`
- `Water Parameters 101: Testing and Maintaining Ideal Conditions`
- `Weekly Aquarium Maintenance Routine for Busy Owners`

Additional live short guides may still be expanded into full long-form versions over time.

## Planning Docs

Implementation planning lives in [docs/site-architecture.md](D:\Aquarium\Aquarium\docs\site-architecture.md).
