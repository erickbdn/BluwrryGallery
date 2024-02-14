<script>
    import Header from './Components/Header.svelte';
</script>

<style>
    .shell {
        display: flex;
        flex-direction: column;
        min-height: 100vh; /* Ensure Shell fills the viewport height */
    }

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
    
</div>