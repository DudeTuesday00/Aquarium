# Guide Artwork Specs — Missing/Broken Hero Images

Generated 2026-08-07. Covers every guide currently rendering with **no hero image or a broken one** — 14 total, more than the original "Tier 2" estimate of 8, because auditing `heroImage` frontmatter against the actual files in `public/images/guides/` turned up 5 guides referencing PNGs that don't exist anywhere on disk (broken `<img>` in production today), in addition to the 9 guides that never had a `heroImage` field at all. Three other mismatches (`best-beginner-fish`, `cichlid-tank-basics`, `water-parameters-101`) were simple filename typos and have already been fixed by renaming the existing file — no new art needed for those three.

## House style (confirmed from existing hero images)

All published hero images share one consistent style — **not photorealistic**. Every reference image (`betta-tank-basics.png`, `aquarium-filter-types-explained.png`, `cichlid-tank-basics.png`, `best-beginner-fish.png`, `water-parameters-101.png`) is a hand-drawn colored-pencil illustration: warm cream paper background, a bold hand-lettered outlined title banner across the top, a detailed aquarium scene, and small labeled callout boxes with thin arrow pointers identifying key features. Match this exactly — a photoreal tank photo would look out of place next to the rest of the guides hub.

**Model recommendation:** use **Qwen-Image (best text, slower)** in the Local Image Generator, not the photoreal models (Z-Image/Flux/RealVis/BigASP) — these images live or die on legible embedded title text and callout labels, and Qwen-Image is the one model in the local lineup built for that. If a run comes out with garbled text, regenerate with a new seed before falling back to a different model.

**Standard generator settings for all 14 (fill into the "Local Image Generator" form):**
- Model: `Qwen-Image (best text, slower)`
- Width: `1024`, Height: `1024` (square — matches the site's `heroImageAspect: square` / 494×494 display convention)
- Negative prompt (use for all): `photorealistic, photo, 3d render, blurry text, garbled text, illegible labels, misspelled words, watermark, signature smudge, extra fingers, deformed hands, cropped title, cluttered background`

**Standard frontmatter block** (only needed for the 9 guides below that have *no* `heroImage` field yet — paste into frontmatter after `updatedDate`, adjusting `heroImage`/`heroImageAlt`):
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

### 1. Aquascaping Basics
- File: `src/content/guides/aquascaping-basics-creating-stunning-underwater-landscapes.md`
- Save generated image as: `public/images/guides/aquascaping-basics.png` (already referenced — no frontmatter edit needed)
- Prompt: `Colored-pencil illustration in the style of a hand-drawn aquarium care infographic: warm cream paper background, bold hand-lettered outlined title banner reading "AQUASCAPING BASICS", a beautifully aquascaped freshwater tank with driftwood branching upward, layered rockwork, a carpet plant foreground, mid-ground stem plants, and a tall background plant creating depth, small labeled callout text boxes with thin arrow pointers reading "FOCAL POINT", "NEGATIVE SPACE", "HARDSCAPE LAYERING", "PLANT GROUPING", warm cozy educational poster style, soft visible pencil texture`

### 2. Breeding Easy Aquarium Fish at Home
- File: `src/content/guides/breeding-easy-aquarium-fish-at-home.md`
- Save as: `public/images/guides/breeding-easy-aquarium-fish.png`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "BREEDING EASY AQUARIUM FISH", a small breeding tank with guppies and cherry shrimp, a gentle sponge filter, floating plants and moss for fry cover, a small floating breeder box visible, labeled callout boxes with arrow pointers reading "SPONGE FILTER: FRY-SAFE", "FLOATING PLANTS", "BREEDER BOX", "FRY FOOD", warm cozy educational poster style`

### 3. Community Tank Compatibility Guide
- File: `src/content/guides/community-tank-compatibility-guide.md`
- Save as: `public/images/guides/community-tank-compatibility.png`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "COMMUNITY TANK COMPATIBILITY", a peaceful mixed freshwater community tank with a school of tetras swimming mid-water, corydoras catfish on the substrate, a calm gourami near the surface, planted with driftwood and greenery, labeled callout boxes with arrow pointers reading "TOP LAYER", "MID LAYER", "BOTTOM LAYER", "SCHOOL SIZE: 6+", warm cozy educational poster style`

### 4. Emergency Aquarium Troubleshooting Guide
- File: `src/content/guides/emergency-aquarium-troubleshooting-guide.md`
- Save as: `public/images/guides/emergency-aquarium-troubleshooting.png`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "EMERGENCY AQUARIUM TROUBLESHOOTING" with a subtle amber alert accent, an aquarium scene during a home power outage with a battery-powered air pump and a flashlight nearby, a thermometer being checked, labeled callout boxes with arrow pointers reading "BATTERY AIR PUMP", "CHECK HEATER", "WATCH FOR CLOUDY WATER", "STAY CALM, ACT FAST", calm reassuring educational poster style, not alarming`

### 5. Saltwater Aquarium Basics for Beginners
- File: `src/content/guides/saltwater-beginner-basics.md`
- Save as: `public/images/guides/saltwater-aquarium-basics.png`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "SALTWATER AQUARIUM BASICS", a small beginner nano reef tank with live rock formations, a pair of ocellaris clownfish, a protein skimmer visible in the back corner, labeled callout boxes with arrow pointers reading "PROTEIN SKIMMER", "LIVE ROCK", "SALINITY 1.023-1.026", "RO/DI WATER ONLY", warm cozy educational poster style`

---

## Group B — No `heroImage` field yet (needs the frontmatter block added too)

### 6. Best Freshwater Community Fish for Home Tanks
- File: `src/content/guides/freshwater-community-fish.md`
- Save as: `public/images/guides/freshwater-community-fish.png`
- heroImageAlt: `"Peaceful freshwater community tank with schooling tetras, harlequin rasboras, and a corydoras group at the substrate"`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "FRESHWATER COMMUNITY FISH", a vibrant peaceful community tank with neon and cardinal tetras schooling together, harlequin rasboras, and a group of corydoras catfish at the bottom, lush planting, labeled callout boxes with arrow pointers reading "SCHOOLING FISH", "BOTTOM DWELLERS", "PEACEFUL TEMPERAMENT", "STOCK IN GROUPS", warm cozy educational poster style`

### 7. Identifying and Treating Common Fish Diseases
- File: `src/content/guides/identifying-and-treating-common-fish-diseases.md`
- Save as: `public/images/guides/identifying-and-treating-common-fish-diseases.png`
- heroImageAlt: `"Educational diagram-style aquarium illustration showing early signs of common fish diseases with labeled callouts"`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "IDENTIFYING FISH DISEASES", a calm educational diagram-style aquarium with a few fish shown with mild, tasteful, non-graphic symptom indicators, a small quarantine tank in one corner, labeled callout boxes with arrow pointers reading "ICH: WHITE SPOTS", "FIN ROT: RAGGED FINS", "QUARANTINE TANK", "OBSERVE DAILY", friendly clinical-but-warm educational poster style, not disturbing or graphic`

### 8. Invertebrate Care: Snails, Shrimp & Crayfish in Small Tanks
- File: `src/content/guides/invertebrate-care-snails-shrimp-crayfish-in-small-tanks.md`
- Save as: `public/images/guides/invertebrate-care-snails-shrimp-crayfish.png`
- heroImageAlt: `"Small planted nano tank with nerite snails, cherry shrimp, and a dwarf crayfish among moss and driftwood"`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "INVERTEBRATE CARE", a small nano tank with moss-covered driftwood, nerite snails grazing on the glass, cherry shrimp among the plants, and a dwarf crayfish near a small cave, labeled callout boxes with arrow pointers reading "NERITE SNAILS: ALGAE CLEANUP", "CHERRY SHRIMP", "DWARF CRAYFISH: SOLO ONLY", "COPPER-FREE WATER", warm cozy educational poster style`

### 9. Live Plants vs Artificial Plants: Which Is Best for You?
- File: `src/content/guides/live-plants-vs-artificial-plants-which-is-best-for-you.md`
- Save as: `public/images/guides/live-plants-vs-artificial-plants.png`
- heroImageAlt: `"Split comparison illustration of a lush live-planted aquarium tank beside a clean artificial-plant aquarium tank"`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "LIVE VS ARTIFICIAL PLANTS", a split-composition image with a lush live-planted aquascape on the left half and a clean artificial-plant tank on the right half, a thin dividing line down the center, labeled callout boxes with arrow pointers reading "LIVE: NATURAL FILTRATION", "LIVE: NEEDS LIGHT", "ARTIFICIAL: ZERO MAINTENANCE", "ARTIFICIAL: NO ALGAE RISK", warm cozy educational poster style`

### 10. Nano Aquarium Care for Tiny Spaces
- File: `src/content/guides/nano-aquarium-care-for-tiny-spaces.md`
- Save as: `public/images/guides/nano-aquarium-care-for-tiny-spaces.png`
- heroImageAlt: `"Small 5-gallon nano aquarium on a desk with compact equipment and lightly stocked shrimp or small fish"`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "NANO AQUARIUM CARE", a small 5-gallon nano tank on a desk in a cozy home office setting, compact gentle filter, small heater, lightly planted with a few shrimp or nano fish, labeled callout boxes with arrow pointers reading "UNDER 10 GALLONS", "GENTLE FILTRATION", "LIGHT STOCKING ONLY", "STABLE TEMPERATURE", warm cozy educational poster style`

### 11. Overfeeding vs Underfeeding: Nutrition Guidelines
- File: `src/content/guides/overfeeding-vs-underfeeding-nutrition-guidelines.md`
- Save as: `public/images/guides/overfeeding-underfeeding-nutrition.png`
- heroImageAlt: `"Side-by-side comparison illustration of correct fish feeding portions versus overfeeding with uneaten food on the substrate"`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "FEEDING: RIGHT AMOUNT VS TOO MUCH", a split comparison aquarium image showing fish actively eating a small pinch of food on one side and excess uneaten food sinking onto the substrate with slightly cloudy water on the other side, labeled callout boxes with arrow pointers reading "EATEN IN 2-3 MIN", "OVERFEEDING: LEFTOVER FOOD", "FEED 1-2X DAILY", "WATCH WATER CLARITY", warm cozy educational poster style`

### 12. Safe Acclimation Techniques for New Fish and Shrimp
- File: `src/content/guides/safe-acclimation-techniques-for-new-fish-and-shrimp.md`
- Save as: `public/images/guides/safe-acclimation-techniques.png`
- heroImageAlt: `"Illustration of float and drip acclimation methods for safely introducing new fish and shrimp to a tank"`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "SAFE ACCLIMATION TECHNIQUES", an aquarium scene showing a sealed fish bag floating on the water surface on one side and a drip-acclimation setup with airline tubing dripping into a small container of new fish on the other side, labeled callout boxes with arrow pointers reading "FLOAT METHOD: 15-20 MIN", "DRIP METHOD: SLOW DRIPS", "MATCH TEMPERATURE", "NEVER POUR BAG WATER IN", warm cozy educational poster style`

### 13. Seasonal Aquarium Care: Summer Heat & Winter Tips
- File: `src/content/guides/seasonal-aquarium-care-summer-heat-and-winter-tips.md`
- Save as: `public/images/guides/seasonal-aquarium-care.png`
- heroImageAlt: `"Split seasonal illustration of an aquarium with summer cooling measures on one side and winter heater checks on the other"`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "SEASONAL AQUARIUM CARE", a split-composition image with a warm summer scene showing evaporation top-off and a small fan cooling the tank on one half, and a cold winter scene with snow visible through a window and someone checking the heater and thermometer on the other half, labeled callout boxes with arrow pointers reading "SUMMER: TOP OFF EVAPORATION", "SUMMER: FAN COOLING", "WINTER: CHECK HEATER", "WINTER: STABLE TEMP", warm cozy educational poster style`

### 14. Setting Up a Low-Maintenance Planted Aquarium
- File: `src/content/guides/setting-up-a-low-maintenance-planted-aquarium.md`
- Save as: `public/images/guides/low-maintenance-planted-aquarium.png`
- heroImageAlt: `"Low-tech planted aquarium with hardy Anubias and Java Fern on driftwood, simple substrate, and basic LED lighting"`
- Prompt: `Colored-pencil illustration, hand-drawn aquarium care infographic style, warm cream paper background, bold hand-lettered outlined title banner reading "LOW-MAINTENANCE PLANTED TANK", a lush but simple planted freshwater tank with hardy Anubias and Java Fern mounted on driftwood, basic substrate, a simple LED light fixture, no CO2 equipment visible, labeled callout boxes with arrow pointers reading "EASY PLANTS: ANUBIAS & JAVA FERN", "NO CO2 NEEDED", "BASIC LED LIGHT", "LOW-TECH SUBSTRATE", warm cozy educational poster style`

---

## Workflow to apply each one

1. Open the **Local Image Generator (Z-Image)** form in n8n.
2. Paste the guide's Prompt, set Model to `Qwen-Image (best text, slower)`, paste the standard Negative prompt, Width/Height `1024`/`1024`, leave Seed blank.
3. Submit, review the result — regenerate with a different seed if the title text or callout labels come out garbled (Qwen-Image is good but not perfect at long strings of small text).
4. Save the output PNG to the exact path listed above under `public/images/guides/`.
5. For Group A (5 guides): no frontmatter change needed — the path is already referenced.
6. For Group B (9 guides): add the standard frontmatter block (`heroImage`, `heroImageAlt`, `heroImageFit: contain`, `heroImageAspect: square`, `heroLayout: balanced`, `heroTitleSize: compact`) to the guide's frontmatter using the `heroImageAlt` text given above.
7. Run the dev server and open `/guides/<slug>` to confirm the image renders and isn't cropped oddly at 494×494 square display.

**Scheduling reminder:** this Local Image Generator workflow shares the same local ComfyUI resource as the Planting Atlas (10:00 CT) and Sooner Smoker (13:00 CT) Newsletter Generators — see `docs/site-architecture.md` → "Automation Schedule" for the full picture. Running these 14 jobs outside those two windows avoids queueing behind the scheduled newsletter image batches.
