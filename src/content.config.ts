import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const photoSchema = z.object({
  src: z.string(),
  alt: z.string(),
});

const outdoors = defineCollection({
  loader: glob({ base: "./src/content/outdoors", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    region: z.string(),
    location: z.string(),
    type: z.string(),
    miles: z.number().optional(),
    time: z.string().optional(),
    gpx: z.string().optional(),
    photos: z.array(photoSchema).optional(),
    gallery: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

const trips = defineCollection({
  loader: glob({ base: "./src/content/trips", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    type: z.string(),
    place: z.string(),
    gpx: z.string().optional(),
    photos: z.array(photoSchema).optional(),
    gallery: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

const gear = defineCollection({
  loader: glob({ base: "./src/content/gear", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    type: z.string(),
    rating: z.number().min(1).max(10).optional(),
    photos: z.array(photoSchema).optional(),
    gallery: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

const books = defineCollection({
  loader: glob({ base: "./src/content/books", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string().optional(),
    rating: z.number().min(1).max(10).optional(),
    status: z.string(),
    photos: z.array(photoSchema).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { outdoors, trips, gear, books };
