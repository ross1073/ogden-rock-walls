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
    heroImage: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })).optional(),
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

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    excerpt: z.string(),
    date: z.string(),
    author: z.string().default('Ogden Rock Walls'),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
  }),
});

export const collections = { services, locations, blog };
