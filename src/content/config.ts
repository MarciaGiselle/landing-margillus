import { defineCollection, z } from "astro:content";

const art = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    technique: z.string(),
    dimensions: z.string(),
    year: z.number(),
  }),
});

export const collections = {
  art,
};
