import {windi} from 'svelte-windicss-preprocess'
import adapterVercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), windi({
		configPath: 'windi.config.cjs'
	})],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapterVercel()
	}
};

export default config;
