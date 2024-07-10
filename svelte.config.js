import adapter from '@sveltejs/adapter-auto';
import preprocess, { scss } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: '@use "../styles/functions";'
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
