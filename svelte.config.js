import preprocess from 'svelte-preprocess';
import { resolve } from 'path';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: { prependData: `@import 'src/styles/globals.scss';` }
	}),
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		alias: {
			'@': resolve('./src')
		}
	}
};

export default config;
