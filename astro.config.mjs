// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkCardLink from './plugins/remark-cardlink';
import AutoImport from 'astro-auto-import';
import remarkMoxfield from './plugins/remark-moxfield';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://johnnywubrg.com',

  integrations: [
    AutoImport({
      imports: [
        '@components/global/CardLink.astro',
        '@components/global/Decklist.astro',
      ],
    }),
    mdx(),
    sitemap(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkMoxfield, remarkCardLink],
  },
  redirects: {
    '/about': '/posts/welcome/'
  }
});
