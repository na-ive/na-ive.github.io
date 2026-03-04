import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
      githubUrl: z.string().optional(),
      order: z.number().optional().default(999),
    }),
});

export const collections = {
  projects: projectsCollection,
};
