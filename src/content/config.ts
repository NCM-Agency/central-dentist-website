import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    readTime: z.string(),
    categories: z.array(z.string()).default([]),
    featuredImage: z.string().optional(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
