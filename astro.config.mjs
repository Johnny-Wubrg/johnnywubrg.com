// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkCardLink from './plugins/remark-cardlink';
import AutoImport from 'astro-auto-import';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	
  integrations: [
    AutoImport({
      imports: ['@components/global/CardLink.astro'],
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkCardLink],
  },
});
