import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';

const config: UserConfig = {
	plugins: [sveltekit(),
		  ],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;