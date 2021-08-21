import {windi} from 'svelte-windicss-preprocess'
import adapterVercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [windi({
		configPath: 'windi.config.cjs'
	})],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapterVercel()
	}
};

export default config;
