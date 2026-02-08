import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const artworksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    category: z.string().optional(),
    year: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  artworks: artworksCollection,
};
