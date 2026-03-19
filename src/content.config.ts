import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/guides'
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Freshwater Fish', 'Saltwater Fish', 'Equipment', 'Health & Care', 'Setup & Maintenance', 'Advanced Topics']),
    publishDate: z.coerce.date(),
    featured: z.boolean().optional().default(false)
  })
});

export const collections = { guides };