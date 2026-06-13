import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    repo: z.string().optional(),
    showStars: z.boolean().default(false),
    technologies: z.array(z.string()).default([]),
    order: z.number().default(0)
  }),
});

const sections = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/sections" }),
  schema: z.object({
    title: z.string(),
    order: z.number()
  }),
});

export const collections = { projects, sections };
