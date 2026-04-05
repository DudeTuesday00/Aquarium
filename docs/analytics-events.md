# Analytics Events

Fin Sanctuary now has a lightweight event layer designed to work with `window.dataLayer` and GA4 once `PUBLIC_GA_MEASUREMENT_ID` is configured.

## Core Events

- `wizard_completed`
  - Fired when the wizard generates a complete recommendation.
  - Includes: `experience`, `environment`, `tank`, `water`, `fish`, `plants`, `maint`, `budget`.

- `newsletter_signup_submit`
  - Fired on newsletter form submission.
  - Includes: `location`, `label`, `interest`.

- `contact_form_submit`
  - Fired on contact form submission.
  - Includes: `location`, `label`.

- `shop_interest_click`
  - Fired when visitors click a shop-related inquiry CTA.
  - Used for custom-print interest and product-fit intent.

- `guide_next_step_click`
  - Fired from guide-page action links such as `Browse More Guides`, `Shop Matching Accessories`, and `Ask a Question`.

- `guide_related_click`
  - Fired when a related guide card is opened from a guide page.

- `guide_feature_click`
  - Fired from featured-guide links on the homepage.

- `video_outbound_click`
  - Fired when a visitor clicks from the site to YouTube video content.

- `media_next_step_click`
  - Fired from video, gallery, and podcast pages when visitors move to another Fin Sanctuary section.

- `start_here_click`
  - Fired from the beginner onboarding page to measure which onboarding path users choose.

- `newsletter_next_step_click`
  - Fired from the newsletter landing page when a visitor continues to guides or the wizard.

- `newsletter_confirmation_click`
  - Fired from the post-signup confirmation page when a visitor continues deeper into the site.

- `email_click`
  - Fired when a visitor clicks a tracked email link on the site.

## Recommended First GA4 Reports

- Newsletter signups by `interest`
- Wizard completions by `tank`, `water`, and `budget`
- Shop inquiry clicks by `location`
- Top clicked guide-to-guide paths
- YouTube outbound clicks from `videos` and `gallery`
- Start Here CTA performance by `label`

## Deployment Requirement

To send these events to GA4, set:

- `PUBLIC_GA_MEASUREMENT_ID=<your GA4 measurement id>`

Without that variable, events still push into `window.dataLayer`, which keeps the site safe for local testing and future analytics integrations.
