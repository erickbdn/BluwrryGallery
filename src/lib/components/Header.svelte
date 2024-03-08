<script>    
  import { hideNavBar, destroyScrollTrigger } from '$lib/utils/gsap';
  import { afterNavigate, beforeNavigate } from '$app/navigation';

afterNavigate(() => {
  hideNavBar();
});

  beforeNavigate(() => {
    destroyScrollTrigger();
  })

</script>

<header class="header">
    <div class="title">
        <a href="/">Christopher Ariel</a>
    </div>
    <nav class="navigation">
        <a href="/AboutMe">About Me</a>
        <a href="/Gallery">Gallery</a>
        <a href="/Lightroom">LR Preset</a>
        <a href="/studio">Studio</a>
    </nav>
</header>

<style>
    .header {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        z-index: 2;
        position: sticky;
    top: 0; /* Stick to the top of the viewport */
    padding: 20px;
border-bottom: 1px;
border-style: outset;
width: 100vw;
background-color: white;
    }
    
    .header a {
        text-decoration: none;
        color: black;
    }

    .title { 
        grid-area: 1 / 2 / 4 / 5; 
        align-self: end;
        font-size: 2rem;
    }

    .navigation { 
        grid-area: 2 / 6 / 4 / 10;
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Split into four columns */
        grid-column-gap: 10px;
        margin-top: -5px;
    }

    .navigation a {
        text-align: center; /* Center align the anchor text */
    }
</style>