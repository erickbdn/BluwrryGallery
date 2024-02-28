<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
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