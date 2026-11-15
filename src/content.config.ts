import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Each project is a Markdown (or MDX) file in src/content/projects.
// The filename becomes the URL: ooo-riscv.mdx -> /projects/ooo-riscv
const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    date: z.string(), // shown as-is, e.g. "Fall 2025"
    course: z.string().optional(), // e.g. "UIUC ECE 408", shown next to the date
    sort: z.number(), // for ordering: year + .3 spring / .6 summer / .9 fall
    summary: z.string(), // one line for lists
    dek: z.string().optional(), // intro paragraph on the project page; [text](url) links allowed
    image: z.string().optional(),
    hideImage: z.boolean().default(false),
    imageCaption: z.string().optional(),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).optional(),
    links: z.record(z.string(), z.string()).optional(),
    featured: z.boolean().default(false), // show on the home page
    draft: z.boolean().default(false), // hide everywhere
  }),
});

export const collections = { projects };
