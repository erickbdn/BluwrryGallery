<script>
    import { initializeHoverEffect, initializeParallax, destroyParallax } from '$lib/utils/gsap'
    import { onMount, onDestroy } from "svelte";
    /** @type {import('./$types').PageData} */
	export let data;
    
    onMount(() => {
        initializeHoverEffect();
        initializeParallax();
    });

    onDestroy(() => {
        destroyParallax(); // Clean up GSAP animations when component is unmounted
    });

</script>

    <!-- This is Hero Section -->
    <section class="hero-wrapper">
        <h1 class="hero-title">CHRISTOPHER ARIEL'S WEBPAGE</h1>
        {#each data.props.posts.slice(0, 6) as post, index}
            {#if post.image && post.image.asset.url}
                <div class="image-wrapper-{index + 1} hero-images">
                    <img class="hero-images-img" src="{post.image.asset.url}" alt="Image {index + 1}"/>
                </div>
            {/if}
        {/each}
    </section>

    <!-- This is About Section -->
    <section class="about-wrapper">
        <h1 class="about-title">About Me</h1>
        <div class="image-wrapper">
            <img src="{data.props.author[0].image.asset.url}" alt="Christopher Ariel's Profile Picture"/>
        </div>
        <h2 class="about-me-name">{data.props.author[0].name}</h2>
        <p class="about-me-description">{data.props.author[0].description}</p>
        <div class="icons-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" class="social-icon">
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" class="social-icon">
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" class="social-icon">
                <path d="M 43.753906 6.4023438 C 42.53621 6.3489969 41.294792 6.712898 40.271484 7.46875 L 37.525391 9.4960938 L 25 18.755859 L 12.591797 9.5839844 A 1.0001 1.0001 0 0 0 11.949219 9.3007812 L 12.199219 9.3007812 L 9.734375 7.4765625 C 8.7104042 6.7188363 7.4671493 6.3528895 6.2480469 6.40625 C 5.0289444 6.4596105 3.8349462 6.9314667 2.9082031 7.8457031 C 1.7309454 9.0063798 1 10.629831 1 12.410156 L 1 15.84375 A 1.0001 1.0001 0 0 0 1 16.138672 L 1 39.5 C 1 41.421188 2.5788117 43 4.5 43 L 12 43 A 1.0001 1.0001 0 0 0 13 42 L 13 25.373047 L 24.40625 33.804688 A 1.0001 1.0001 0 0 0 25.59375 33.804688 L 37 25.373047 L 37 42 A 1.0001 1.0001 0 0 0 38 43 L 45.5 43 C 47.421188 43 49 41.421188 49 39.5 L 49 16.119141 A 1.0001 1.0001 0 0 0 49 15.859375 L 49 12.410156 C 49 10.6517 48.290455 9.0357821 47.128906 7.8730469 C 47.095336 7.8394769 47.084086 7.83018 47.097656 7.84375 A 1.0001 1.0001 0 0 0 47.091797 7.8378906 C 46.165242 6.9256756 44.971603 6.4556905 43.753906 6.4023438 z M 43.644531 8.4003906 C 44.400835 8.4300436 45.134049 8.7168876 45.689453 9.2636719 C 45.708363 9.2823439 45.722171 9.2964424 45.712891 9.2871094 C 46.50934 10.084374 47 11.188613 47 12.410156 L 47 15.496094 L 39 21.408203 L 39 11 A 1.0001 1.0001 0 0 0 38.996094 10.898438 L 41.458984 9.078125 A 1.0001 1.0001 0 0 0 41.460938 9.078125 C 42.109578 8.598977 42.888228 8.3707375 43.644531 8.4003906 z M 6.3574219 8.40625 C 7.1145694 8.37661 7.8958927 8.6037105 8.5449219 9.0839844 L 11.003906 10.902344 A 1.0001 1.0001 0 0 0 11 11 L 11 21.408203 L 3 15.496094 L 3 12.410156 C 3 11.174482 3.5017577 10.068855 4.3125 9.2695312 C 4.8677569 8.7217677 5.6002743 8.4358895 6.3574219 8.40625 z M 37 12.371094 L 37 22.886719 L 25 31.755859 L 13 22.886719 L 13 12.373047 L 24.40625 20.804688 A 1.0001 1.0001 0 0 0 25.59375 20.804688 L 37 12.371094 z M 3 17.982422 L 11 23.896484 L 11 41 L 4.5 41 C 3.6591883 41 3 40.340812 3 39.5 L 3 17.982422 z M 47 17.982422 L 47 39.5 C 47 40.340812 46.340812 41 45.5 41 L 39 41 L 39 23.896484 L 47 17.982422 z"></path>
            </svg>
        </div>
    </section>

    <!-- This is Navigation Section -->
    <section class="nav-section">
        <!-- <figure class="nav-image-container">
            <img/>
        </figure> -->
        <nav class="nav-links-container">
            <!-- <ul>
                <li><a href="/about">01<span style="padding-left: 50px;">About Me</span></a></li>
                <li><a href="/Gallery">02<span style="padding-left: 50px;">Gallery</span></a></li>
                <li><a href="/lightroom">03<span style="padding-left: 50px;">Lightroom</span></a></li>
            </ul> -->
            <ul>
                <li class="item">
                  <img class="item-image" src="{data.props.author[0].image.asset.url}">
                  <a href="/AboutMe">
                    <span>01</span>
                    <span>About Me</span>
                  </a>
                </li>
                <li class="item">
                  <img class="item-image" src="{data.props.posts[0].image.asset.url}">
                  <a href="/Gallery">
                    <span>02</span>
                    <span>Gallery</span>
                  </a>
                </li>
                <li class="item">
                  <img class="item-image" src="{data.props.posts[1].image.asset.url}">    
                  <a href="/Lightroom">
                    <span>03</span>
                    <span>Lightroom</span>
                  </a>
                </li>
            </ul>
        </nav>
    </section>

    <style>
        /* Hero Section Styling */
        .hero-wrapper {
               display: grid;
               grid-template-columns: repeat(10, 1fr);
               grid-template-rows: repeat(20, 1fr);
               grid-column-gap: 10px;
               grid-row-gap: 10px;
               position: relative;
               width: 90vw;
               margin: 0 auto; /* Center the container horizontally */
               /* overflow: hidden */
               height: 90vh;
           }
       
           .hero-title {
               grid-area: 3 / 1 / 9 / 11;
               text-align: center;
               position: relative;
                top: 100%;
                left: 50%;
                transform: translate(-50%, -50%);
                margin: 0;
                font-size: 4.5rem;
                font-weight: 500;
           }

           .hero-images {
            display: grid;
    place-items: center;
           }

           .hero-images img {
            position: relative;
            max-width: 100%; 
            max-height: 50vh;
            width: auto;
            height: auto; /* Maintain the aspect ratio of the image */
            display: block; /* Ensure proper rendering as a block-level element */
            transform: scale(0.8);
}

.hero-images-img{
    position: relative;
    margin-top: 27vh;
}
           
           .image-wrapper-1 { grid-area: 9 / 2 / 12 / 5;  position: relative;}
           .image-wrapper-2 { grid-area: 13 / 1 / 16 / 4;  position: relative;z-index: -1;}
           .image-wrapper-3 { grid-area: 17 / 3 / 20 / 6;  position: relative;z-index: -1;}
           .image-wrapper-4 { grid-area: 9 / 7 / 12 / 10;  position: relative;z-index: -1;}
           .image-wrapper-5 { grid-area: 13 / 6 / 16 / 9;  position: relative;}
           .image-wrapper-6 { grid-area: 17 / 8 / 20 / 11;  position: relative; z-index: -1;}
       
           /* About Section Styling */
           .about-wrapper {
               display: grid;
               grid-template-columns: repeat(10, 1fr);
               grid-template-rows: repeat(10, 1fr);
               grid-column-gap: 10px;
               grid-row-gap: 10px;
               height: 60vh;
               width: 90vw;
               margin: -5vh auto 10vh; /* Center the container horizontally */
             scroll-snap-type: y mandatory;
           }
       
           .about-title {
               grid-area: 1 / 3 / 4 / 10;
               font-size: 5em;
               margin-top: 0.5em;
               color: white;
              mix-blend-mode: difference;
               text-align: center;
           }
       
           .image-wrapper {
            z-index: -1;
               grid-area: 2 / 1 / 11 / 6;
           }

           .image-wrapper img {
                width: 100%; /* Ensure the wrapper takes up the entire grid cell */
                height: 100%; /* Ensure the wrapper takes up the entire grid cell */
                overflow: hidden; /* Hide any overflow from the image */
                object-fit: cover;
           }
       
           .about-me-name {
               grid-area: 6 / 6 / 9 / 11;
               font-size: 2em;
               margin-left: 7rem;
           }
       
           .about-me-description {
               grid-area: 6 / 6 / 11 / 11;
               display: flex;
               justify-content: center; /* Align horizontally */
               align-items: center; /* Align vertically */
               margin-left: 7rem;
           }
       
           .icons-wrapper {
               grid-area: 10 / 6 / 11 / 11;
               display: flex;
               justify-content: center; /* Align horizontally */
               align-items: center; /* Align vertically */
               gap: 2rem;
              
           }

           .social-icon {
                width: 24px; /* Adjust the width to change the size */
                height: 24px; /* Adjust the height to change the size */
            }
       
           /* Nav Section Styling */
           .nav-section {
               display: grid;
               grid-template-columns: repeat(4, 1fr);
               grid-template-rows: repeat(10, 1fr);
               grid-column-gap: 10px;
               grid-row-gap: 10px;
               height: 80vh;
               width: 90vw;
               margin: 0 auto -5vh; /* Center the container horizontally */
           }
       
           .nav-links-container { 
               grid-area: 2 / 1 / 5 / 5; 
           }

           .nav-links-container ul {
            list-style: none;
            padding: 0;
            margin: 0;
           }

           .nav-links-container li {
                display: block;
                font-family: 'Belleza', sans-serif;
                position: relative;
                font-size: 80px;
                text-align: center;
                -webkit-text-stroke: 1px black;
                color: transparent;
                z-index: 1;
                
            }

            .nav-links-container a {
                text-decoration: none;
            }

            .nav-links-container img {
            position: fixed;
            top: 0;
            left: 0;
            width: 300px;
            height: 400px;
            object-fit: cover;
            z-index: -1;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            scale: 0.6;
}

.item {
    display: flex;
}

.item a {
    display: flex;
    align-items: center;
    justify-content: space-between; 
    text-decoration: none;
    opacity: 0.5;
    color: inherit
}

.item a:hover {
    opacity: 1;
    color: grey;
    transition: opacity 1s ease-out;
    -webkit-transition: opacity 1s ease-out;  
    -moz-transition: opacity 1s ease-in-out;   
    transition: color 1s ease-out;
    -webkit-transition:color 1s ease-out;  
    -moz-transition: color 1s ease-in-out;  
    mix-blend-mode: difference;
}

/* .item a span {
  margin-left: 55vw;
} */
       
           /* .nav-image-container { 
               grid-area: 1 / 2 / 8 / 4; 
           } */

    /*responsive*/

    @media screen and (max-width: 1024px) {
       
    }
       </style>


