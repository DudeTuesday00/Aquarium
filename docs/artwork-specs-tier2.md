# Guide Artwork Specs — Missing/Broken Hero Images

Generated 2026-08-07, style broadened same day. Covers every guide currently rendering with **no hero image or a broken one** — 14 total, more than the original "Tier 2" estimate of 8, because auditing `heroImage` frontmatter against the actual files in `public/images/guides/` turned up 5 guides referencing PNGs that don't exist anywhere on disk (broken `<img>` in production today), in addition to the 9 guides that never had a `heroImage` field at all. Three other mismatches (`best-beginner-fish`, `cichlid-tank-basics`, `water-parameters-101`) were simple filename typos and have already been fixed by renaming the existing file — no new art needed for those three.

## House style

The site's existing hero images are all hand-drawn colored-pencil infographics (warm cream background, hand-lettered title banner, labeled callouts). That's no longer the only option — photorealistic and other styles are approved per-guide, chosen for whatever best fits the content. This round:

- **13 of 14 go photorealistic** — professional aquarium/product photography. No baked-in text or labels (diffusion models render embedded photo text poorly, and label boxes floating over a real photo look fake) — the guide's own heading and captions carry the labeling.
- **1 stays illustrated** (#7, fish diseases) — a photoreal AI depiction of a "diseased fish" risks looking uncanny or medically misleading, and the non-graphic illustrated diagram style already matches the site's practical, non-alarming tone for a sensitive topic. Kept in the original colored-pencil diagram style with mild non-graphic callouts.

**Generator settings:**
- Photorealistic images (#1–6, #8–14): Model `Z-Image (fast photoreal)`, Width `1024`, Height `1024`. Negative prompt: `cartoon, illustration, painting, drawing, anime, 3d render, text, caption, watermark, label, blurry, lowres, deformed, extra fingers, deformed hands, oversaturated, unrealistic colors, dirty glass, low quality`
- Illustrated image (#7): Model `Qwen-Image (best text, slower)`, Width `1024`, Height `1024`. Negative prompt: `photorealistic, photo, 3d render, blurry text, garbled text, illegible labels, misspelled words, watermark, signature smudge, extra fingers, deformed hands, cropped title, cluttered background`

**Standard frontmatter block** (only needed for the 9 Group B guides that have no `heroImage` field yet — paste into frontmatter after `updatedDate`, adjusting `heroImage`/`heroImageAlt`):
```yaml
heroImage: /images/guides/<filename>.png
heroImageAlt: "<alt text below>"
heroImageFit: contain
heroImageAspect: square
heroLayout: balanced
heroTitleSize: compact
```

---

## Group A — Broken reference (frontmatter already correct, just generate + save to the exact existing path)

### 1. Aquascaping Basics — photorealistic
- File: `src/content/guides/aquascaping-basics-creating-stunning-underwater-landscapes.md`
- Save as: `public/images/guides/aquascaping-basics.png` (already referenced — no frontmatter edit needed)
- Prompt: `photorealistic aquarium photography, a stunningly aquascaped freshwater planted tank in nature aquarium style, tall driftwood branching upward, layered rockwork creating depth, a lush foreground carpet plant, mid-ground stem plants, tall background plants, crystal clear water, soft natural lighting from above, macro lens, shallow depth of field, vibrant greens, professional aquarium photography, high detail`

### 2. Breeding Easy Aquarium Fish at Home — photorealistic
- File: `src/content/guides/breeding-easy-aquarium-fish-at-home.md`
- Save as: `public/images/guides/breeding-easy-aquarium-fish.png`
- Prompt: `photorealistic aquarium photography, a small breeding tank with a school of colorful guppies and cherry shrimp, dense floating plants and moss providing fry cover, a gentle sponge filter visible, soft overhead lighting, crystal clear water, macro detail on the fish, professional aquarium photography, high detail`

### 3. Community Tank Compatibility Guide — photorealistic
- File: `src/content/guides/community-tank-compatibility-guide.md`
- Save as: `public/images/guides/community-tank-compatibility.png`
- Prompt: `photorealistic aquarium photography, a thriving peaceful freshwater community tank with a school of neon tetras swimming together, corydoras catfish foraging on the substrate, a calm gourami near the surface, lush planting with driftwood, crystal clear water, soft natural lighting, professional aquarium photography, high detail`

### 4. Emergency Aquarium Troubleshooting Guide — photorealistic
- File: `src/content/guides/emergency-aquarium-troubleshooting-guide.md`
- Save as: `public/images/guides/emergency-aquarium-troubleshooting.png`
- Prompt: `photorealistic product photography, a home aquarium emergency kit flat lay on a wooden table beside a fish tank, a battery-powered air pump with airline tubing, a flashlight, a floating thermometer, a backup heater, soft warm indoor lighting, realistic textures, high detail, practical and reassuring mood`

### 5. Saltwater Aquarium Basics for Beginners — photorealistic
- File: `src/content/guides/saltwater-beginner-basics.md`
- Save as: `public/images/guides/saltwater-aquarium-basics.png`
- Prompt: `photorealistic aquarium photography, a small beginner saltwater nano reef tank with textured live rock formations, a pair of ocellaris clownfish swimming near a rock cave, a compact protein skimmer visible in the back corner, crystal clear blue-tinted water, soft aquarium lighting, professional aquarium photography, high detail`

---

## Group B — No `heroImage` field yet (needs the frontmatter block added too)

### 6. Best Freshwater Community Fish for Home Tanks — photorealistic
- File: `src/content/guides/freshwater-community-fish.md`
- Save as: `public/images/guides/freshwater-community-fish.png`
- heroImageAlt: `"Vibrant freshwater community tank with schooling tetras, harlequin rasboras, and a corydoras group at the substrate"`
- Prompt: `photorealistic aquarium photography, a vibrant freshwater community tank with a large school of neon and cardinal tetras, harlequin rasboras, and a group of corydoras catfish at the substrate, lush green planting, driftwood, crystal clear water, soft natural lighting, professional aquarium photography, high detail`

### 7. Identifying and Treating Common Fish Diseases — illustrated (kept diagram style, see rationale above)
- File: `src/content/guides/identifying-and-treating-common-fish-diseases.md`
- Save as: `public/images/guides/identifying-and-treating-common-fish-diseases.png`
- heroImageAlt: `"Educational diagram-style aquarium illustration showing early signs of common fish diseases with labeled callouts"`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "IDENTIFYING FISH DISEASES", a calm educational diagram-style aquarium with a few fish shown with mild, tasteful, non-graphic symptom indicators, a small quarantine tank in one corner, labeled callout boxes with arrow pointers reading "ICH: WHITE SPOTS", "FIN ROT: RAGGED FINS", "QUARANTINE TANK", "OBSERVE DAILY", friendly clinical-but-warm educational poster style, not disturbing or graphic`

### 8. Invertebrate Care: Snails, Shrimp & Crayfish in Small Tanks — photorealistic
- File: `src/content/guides/invertebrate-care-snails-shrimp-crayfish-in-small-tanks.md`
- Save as: `public/images/guides/invertebrate-care-snails-shrimp-crayfish.png`
- heroImageAlt: `"Macro photo of a planted nano tank with nerite snails, cherry shrimp, and a dwarf crayfish among moss and driftwood"`
- Prompt: `photorealistic macro aquarium photography, a small planted nano tank with nerite snails grazing on the glass, cherry shrimp foraging among moss-covered driftwood, a dwarf crayfish near a small cave, crystal clear water, shallow depth of field, macro lens detail, soft natural lighting, professional aquarium photography, high detail`

### 9. Live Plants vs Artificial Plants: Which Is Best for You? — photorealistic diptych
- File: `src/content/guides/live-plants-vs-artificial-plants-which-is-best-for-you.md`
- Save as: `public/images/guides/live-plants-vs-artificial-plants.png`
- heroImageAlt: `"Side-by-side photo comparison of a lush live-planted aquarium tank beside a clean artificial-plant aquarium tank"`
- Prompt: `photorealistic aquarium photography diptych, left half shows a lush live-planted aquascape with real green stem plants and driftwood, right half shows a clean artificial-plant aquarium with silk plants, a thin vertical divider line down the center, crystal clear water on both sides, soft natural lighting, professional aquarium photography, high detail`

### 10. Nano Aquarium Care for Tiny Spaces — photorealistic
- File: `src/content/guides/nano-aquarium-care-for-tiny-spaces.md`
- Save as: `public/images/guides/nano-aquarium-care-for-tiny-spaces.png`
- heroImageAlt: `"Small 5-gallon nano aquarium on a desk with compact equipment and lightly stocked shrimp or small fish"`
- Prompt: `photorealistic aquarium photography, a small 5-gallon nano aquarium on a wooden desk in a cozy home office, compact filter and small heater, lightly planted with moss and a few shrimp, warm desk lamp lighting, crystal clear water, professional aquarium photography, high detail`

### 11. Overfeeding vs Underfeeding: Nutrition Guidelines — photorealistic diptych
- File: `src/content/guides/overfeeding-vs-underfeeding-nutrition-guidelines.md`
- Save as: `public/images/guides/overfeeding-underfeeding-nutrition.png`
- heroImageAlt: `"Side-by-side photo comparison of correct fish feeding portions versus overfeeding with uneaten food on the substrate"`
- Prompt: `photorealistic aquarium photography diptych, left half shows fish actively eating a small pinch of food at the water surface in clear water, right half shows excess uneaten food sinking onto the substrate with slightly hazy water, a thin vertical divider line down the center, soft natural lighting, professional aquarium photography, high detail`

### 12. Safe Acclimation Techniques for New Fish and Shrimp — photorealistic
- File: `src/content/guides/safe-acclimation-techniques-for-new-fish-and-shrimp.md`
- Save as: `public/images/guides/safe-acclimation-techniques.png`
- heroImageAlt: `"Photo of a sealed fish bag floating on the surface of a home aquarium during the float acclimation method"`
- Prompt: `photorealistic aquarium photography, a sealed clear plastic fish bag floating on the surface of a home aquarium during the float acclimation method, soft ripples on the water surface, warm indoor lighting, shallow depth of field, professional aquarium photography, high detail, realistic`

### 13. Seasonal Aquarium Care: Summer Heat & Winter Tips — photorealistic diptych
- File: `src/content/guides/seasonal-aquarium-care-summer-heat-and-winter-tips.md`
- Save as: `public/images/guides/seasonal-aquarium-care.png`
- heroImageAlt: `"Split seasonal photo of an aquarium with summer cooling measures on one side and winter heater checks on the other"`
- Prompt: `photorealistic photography diptych, left half shows a warm summer scene with a small fan cooling an aquarium near a sunny window, right half shows a winter scene with snow visible through a window behind the tank and a hand checking a submersible heater, a thin vertical divider line down the center, professional photography, high detail, realistic`

### 14. Setting Up a Low-Maintenance Planted Aquarium — photorealistic
- File: `src/content/guides/setting-up-a-low-maintenance-planted-aquarium.md`
- Save as: `public/images/guides/low-maintenance-planted-aquarium.png`
- heroImageAlt: `"Low-tech planted aquarium with hardy Anubias and Java Fern on driftwood, simple substrate, and basic LED lighting"`
- Prompt: `photorealistic aquarium photography, a lush but simple low-tech planted freshwater tank with hardy Anubias and Java Fern mounted on driftwood, basic substrate, a simple LED light fixture overhead, no CO2 equipment visible, crystal clear water, soft natural lighting, professional aquarium photography, high detail`

---

## Generation log

All 14 generated 2026-08-07/08 via the workflow's new internal webhook trigger (see "Local generation pipeline note" below) using the local ComfyUI instance. All done and wired into guide frontmatter.

| # | Guide | Status |
|---|---|---|
| 1 | Aquascaping Basics | done |
| 2 | Breeding Easy Aquarium Fish | done |
| 3 | Community Tank Compatibility | done |
| 4 | Emergency Aquarium Troubleshooting | done |
| 5 | Saltwater Aquarium Basics | done |
| 6 | Freshwater Community Fish | done |
| 7 | Identifying and Treating Fish Diseases | done |
| 8 | Invertebrate Care | done |
| 9 | Live Plants vs Artificial Plants | done (regenerated once — first attempt ignored the split-comparison instruction and rendered a single tank) |
| 10 | Nano Aquarium Care | done |
| 11 | Overfeeding vs Underfeeding | done |
| 12 | Safe Acclimation Techniques | done |
| 13 | Seasonal Aquarium Care | done |
| 14 | Low-Maintenance Planted Aquarium | done |

## Local generation pipeline note

The "Local Image Generator (Z-Image)" n8n workflow (`U5e3biect7HmUPit`) now has a second, no-auth trigger — an "Internal Webhook" at path `local-image-gen-internal` — alongside its original Basic-Auth-protected form trigger. It submits to ComfyUI and returns the `promptId` immediately (form-triggered runs are unaffected and still wait for the full result). This exists because the form's Basic Auth has no way to be driven programmatically, and ComfyUI's queue can run long enough (it was backed up ~40 jobs deep behind the other site generators when this batch ran) that waiting synchronously for a finished image isn't reliable — polling ComfyUI's own `/history/{promptId}` directly has no such time limit. Useful for future batch generation runs.

**Scheduling reminder:** this Local Image Generator workflow shares the same local ComfyUI resource as the Planting Atlas (10:00 CT) and Sooner Smoker (13:00 CT) Newsletter Generators — see `docs/site-architecture.md` → "Automation Schedule" for the full picture.
