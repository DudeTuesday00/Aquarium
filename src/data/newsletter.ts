export const DEFAULT_NEWSLETTER_ACTION = 'https://formspree.io/f/xpqynalz';

export function getNewsletterAction(): string {
  return import.meta.env.PUBLIC_NEWSLETTER_ACTION || DEFAULT_NEWSLETTER_ACTION;
}

export function getNewsletterSuccessUrl(site?: URL): string {
  if (!site) {
    return '/newsletter-confirmation';
  }

  return new URL('/newsletter-confirmation', site).toString();
}
