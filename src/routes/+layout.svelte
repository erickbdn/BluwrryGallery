<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Lenis from '@studio-freight/lenis'
    import { afterNavigate, beforeNavigate } from '$app/navigation';
    import { onMount } from 'svelte';
    let lenis; // Declare lenis variable here

onMount(() => {
    lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
})

beforeNavigate(() => {
  lenis.destroy(); // Destroy Lenis on navigation
});

afterNavigate(() => {
        lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
    });

</script>

<style>

    .content {
        flex: 1; /* Allow content to expand to fill remaining space */
        margin: 5% 0;
    }
</style>
<div class="shell">
    <Header />
    
    <main class="content">
   
      <!-- This slot will be filled with the content of each page -->
      <slot />
    </main>
    
    <Footer />
</div>