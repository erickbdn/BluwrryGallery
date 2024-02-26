import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
    // optimizeDeps: {
    //     exclude: ['sanity'] // do not pre-bundle some-library
    //   }
});
    