import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    order: z.number(),
    highlights: z.array(z.string()),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['conference', 'journal', 'whitepaper', 'article', 'tutorial']),
    url: z.string().optional(),
    description: z.string(),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    year: z.number(),
    type: z.enum(['talk', 'poster', 'presentation']),
    url: z.string().optional(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    impact: z.string(),
    url: z.string().optional(),
    order: z.number(),
    features: z.array(z.object({
      name: z.string(),
      detail: z.string(),
    })).optional(),
  }),
});

export const collections = { experience, publications, talks, projects };
