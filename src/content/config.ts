import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tools: z.array(z.string()),
    link: z.string().url(),
    role: z.string(),
    year: z.number(),
    company: z.string(),
    image: z.string(),
    layout: z.string(),
  }),
});

export const collections = {
  portfolio,
};
