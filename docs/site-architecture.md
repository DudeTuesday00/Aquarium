# Site Architecture

## Goal

Build a USA-focused aquarium website for home and small-office users that combines:

- A recommendation wizard
- A large educational guide library
- Direct sales for 3D-printed accessories
- AdSense and affiliate monetization
- Trust-building pages and media

## Primary Sections

### 1. Homepage

Purpose:

- Explain the brand quickly
- Push users into either the wizard or the guide library
- Feature products, guides, and trust signals

Recommended homepage blocks:

- Hero with clear value proposition
- CTA pair: `Start the Wizard` and `Browse Guides`
- Audience framing for home and small-office tanks
- Featured beginner guide
- Featured accessories
- Newsletter signup
- Photo gallery preview
- Trust section with About/Contact links

### 2. Wizard

Purpose:

- Help users choose the right aquarium setup based on constraints and goals

Recommended wizard inputs:

- Experience level
- Tank size preference or available space
- Budget range
- Freshwater vs saltwater
- Desired maintenance level
- Desired fish style
- Children/pets/office environment considerations
- Interest in live plants
- Noise tolerance
- Accessory interest

Wizard outputs should recommend:

- Tank size range
- Freshwater or saltwater direction
- Fish category suggestions
- Starter equipment list
- Maintenance expectations
- Suggested accessories
- Matching guides to read next
- Relevant affiliate/product links

Implementation note:

- Move recommendation rules into structured data rather than keeping them inline in page scripts
- Keep the UI separate from the recommendation engine so logic can grow without rewriting the page

### 3. Guides

Purpose:

- Build search traffic, authority, and long-tail monetization

Recommended guide categories:

- Beginner setup
- Freshwater fish
- Saltwater fish
- Aquarium plants
- Fish diseases
- Filter types
- Fish food and feeding
- Lighting
- Heater and temperature control
- Water chemistry
- Aquarium substrate
- Cleaning and maintenance
- Tank mates and compatibility
- Equipment troubleshooting
- Small-office aquarium advice

Recommended guide structure:

- Summary
- Who this guide is for
- Step-by-step explanation
- Recommended products
- Related guides
- Affiliate disclosure where applicable
- AdSense placement zones that do not interrupt usability

Implementation note:

- Convert guides into a scalable content model with frontmatter for title, description, category, audience, tags, publish date, updated date, affiliate usage, and featured status

### 4. Shop

Purpose:

- Sell custom 3D-printed aquarium accessories

Recommended product data per item:

- Product name
- Problem solved
- Compatible tank sizes or equipment
- Material/color options
- Photos
- Price
- Purchase link
- Upsells or bundles

Suggested initial categories:

- Filter guards
- Feeding rings
- Plant clips
- Cable management parts
- Lid/cover accessories
- Custom-fit accessories

### 5. Gallery

Purpose:

- Show social proof
- Demonstrate real-world use of products and tank setups

Content types:

- Owner builds
- Customer-submitted tanks
- Before/after setups
- Product close-ups

### 6. About / Contact / Newsletter

Purpose:

- Establish trust
- Support lead capture
- Encourage questions and custom orders

Needs:

- Personal story and aquarium background
- Contact form for questions and custom work
- Newsletter signup for updates, new products, and guide drops

## Monetization Model

### AdSense

Use AdSense in:

- Guides
- Category hubs
- Possibly homepage support sections

Avoid:

- Overloading the wizard flow with ads
- Blocking key CTAs

### Affiliate Links

Best placement:

- Equipment guides
- Fish food guides
- Test kit and filter recommendations
- Wizard result pages

Requirements:

- Clear FTC-style affiliate disclosure
- Honest product framing tied to the actual use case

### Direct Sales

Own products should appear in:

- Shop pages
- Wizard recommendations where relevant
- Guide callouts where they solve a real problem

## SEO and Content Strategy

Target intent clusters:

- “best aquarium setup for beginners”
- “freshwater fish for small tank”
- “best aquarium filter for 20 gallon tank”
- “aquarium fish diseases”
- “best fish food for community tank”
- “saltwater vs freshwater aquarium”
- “aquarium for office”

Content priorities:

1. Beginner setup and maintenance
2. Equipment buying guides
3. Fish compatibility and disease content
4. Office and small-space aquarium content
5. Product-support content tied to real owner pain points

## Design Constraints

- Mobile-first layout is required
- Light/dark mode should remain supported
- Use the established palette:
  - `#0185AE`
  - `#0DAFBC`
  - `#8AC9AB`
  - `#F3EFEE`
  - `#E8D9BF`
- Design for practical trust, not luxury/commercial aquarium aesthetics

## Recommended Implementation Phases

### Phase 1

- Finalize homepage positioning
- Build a real metadata system including OG tags
- Replace placeholder shop links and contact copy
- Expand About page

### Phase 2

- Move wizard logic into structured data
- Improve wizard questions and result quality
- Add guide recommendation links from wizard outcomes

### Phase 3

- Introduce a scalable guide content system
- Create category hubs
- Publish foundational guide content

### Phase 4

- Add newsletter provider integration
- Add AdSense placeholders and policy-safe layout zones
- Add affiliate disclosures and reusable recommendation blocks

### Phase 5

- Add analytics, search, and content update workflows
- Improve gallery and customer submission flow
- Add richer product merchandising
