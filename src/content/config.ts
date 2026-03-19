import { defineCollection, z } from 'astro:content';

const guideCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Freshwater Fish', 'Saltwater Fish', 'Equipment', 'Health & Care', 'Setup & Maintenance', 'Advanced Topics']),
    publishDate: z.date(),
    featured: z.boolean().optional().default(false)
  })
});

export const collections = {
  guides: guideCollection
};