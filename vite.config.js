import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    // ssr: {
    //     noExternal: [
    //       'gsap',
    //     ],
    //   }, 
    //   remove ssr option later this is only for dev
	plugins: [sveltekit()],
    optimizeDeps: {
        exclude: ['sanity'] // do not pre-bundle some-library
      }
      
});
    