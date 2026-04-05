import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://finsanctuary.com';
  const guides = await getCollection('guides');

  const staticUrls = [
    '',
    '/about',
    '/contact',
    '/gallery',
    '/guides',
    '/podcasts',
    '/privacy-policy',
    '/shop',
    '/terms-of-use',
    '/videos',
    '/wizard',
    '/affiliate-disclosure',
    '/advertising-disclosure'
  ];

  const urls = [
    ...staticUrls.map((path) => ({
      loc: `${base}${path || '/'}`,
      lastmod: undefined
    })),
    ...guides.map((guide) => ({
      loc: `${base}/guides/${guide.id}/`,
      lastmod: (guide.data.updatedDate ?? guide.data.publishDate).toISOString()
    }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>${url.lastmod ? `
    <lastmod>${url.lastmod}</lastmod>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
