import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	esbuild: {
        // Configure esbuild to transpile CommonJS modules
        jsxFactory: '__vite__createElement',
        jsxFragment: '__vite__Fragment'
    }
});
