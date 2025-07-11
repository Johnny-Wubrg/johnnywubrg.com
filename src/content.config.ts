import { file, glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      hero: z
        .object({
          image: image(),
          anchor: z.string().default('center'),
          credit: z.string(),
        })
        .optional(),
      artistCredit: z.string().optional(),
    }),
});

const projects = defineCollection({
  loader: file('./src/content/data/projects.yml'),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      href: z.string(),
    }),
});

export const collections = { blog, projects };
