import preprocess from 'svelte-preprocess';
import { resolve } from 'path';
import netlify from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: { prependData: `@import 'src/styles/globals.scss';` }
	}),
	kit: {
		adapter: netlify(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					'@': resolve('./src')
				}
			}
		}
	}
};

export default config;
