<script>    
  import { hideNavBar, destroyScrollTrigger } from '$lib/utils/gsap';
  import { afterNavigate, beforeNavigate } from '$app/navigation';

afterNavigate(() => {
  hideNavBar();
});

  beforeNavigate(() => {
    destroyScrollTrigger();
  })
  let showNav = false;

function toggleNav() {
  showNav = !showNav;
}
</script>

<header class="header">
    <div class="title">
        <a href="/">Christopher Ariel</a>
    </div>
    <div class="nav-toggle" on:click={toggleNav}>
        <p>≡</p>
    </div>
    <nav class="navigation" class:show={showNav}>
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
background-color: #f4f3ee;
    }
    
    .header a {
        text-decoration: none;
        color: black;
    }

    .title { 
        grid-area: 1 / 2 / 4 / 5; 
        align-self: end;
        font-size: 1.5rem;
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
        font-size: 1em;
    }

    .nav-toggle {
        display: none; /* Initially hide hamburger button */
        cursor: pointer;
    }
    
    .nav-toggle .line {
        width: 30px;
        height: 3px;
        background-color: black;
        margin: 5px 0;
    }

    /*tablet**/
    @media screen and (max-width: 1024px) and (min-width: 769px) {
    .navigation {
        grid-column-gap: 0px;
    }

    .nav-toggle {
        display: none; /* Hide hamburger button on tablets */
    }
}

    /*mobile*/
    @media screen and (max-width: 767px) {
        .navigation {
            display: none; /* Hide navigation on mobile */
        }

        .nav-toggle {
            display: flex; /* Show hamburger button on mobile */
        }

        .navigation.show {
            display: flex; /* Show navigation when .show class is present */
            flex-direction: column;
            position: absolute;
            top: 70px; /* Adjust based on header height */
            right: 0;
            background-color: #f4f3ee;
            padding: 20px;
        }
    }
</style>