import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    shortDescription: z.string(),
    icon: z.string().optional(),
    order: z.number(),
  }),
});

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    city: z.string(),
    state: z.string().default('UT'),
    metaTitle: z.string(),
    metaDescription: z.string(),
    county: z.string(),
    terrain: z.string(),
    challenges: z.array(z.string()),
    testimonial: z.object({
      quote: z.string(),
      name: z.string(),
    }).optional(),
  }),
});

export const collections = { services, locations };
