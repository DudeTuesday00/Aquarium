import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    audience: z.enum(['beginner', 'intermediate']),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    relatedProducts: z.array(z.string()).default([]),
    affiliateReady: z.boolean().default(false)
  })
});

export const collections = { guides };
