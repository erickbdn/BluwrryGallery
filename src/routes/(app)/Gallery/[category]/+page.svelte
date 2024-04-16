<script>
    export let data;
console.log(data)
import { onMount, onDestroy } from "svelte";
import { carousel } from '$lib/utils/gsap'

onMount(() => {
  carousel();
})

// let activeIndex = null; // Store the index of the active slide
function toggleOverlayLayout(index) {
        const overlayLayout = document.querySelector('.overlay-layout');
        overlayLayout.style.visibility = 'visible';
        carousel(index); // Pass the clicked index to initialize the carousel
        // activeIndex = index; // Set the index of the active slide
    }

    function closeOverlayLayout() {
        const overlayLayout = document.querySelector('.overlay-layout');
        overlayLayout.style.visibility = 'hidden';
        // activeIndex = null;
    }

</script>
<h1 class="category-title">{data.props.posts[0].category.name}</h1>
<section class="gallery-grid">
  <div class="masonry-grid">
      {#each data.props.posts as post, index}
          <div class="grid-item">
              <img src="{post.image.asset.url}" alt="{post.title}" class="grid-image" on:click={() => toggleOverlayLayout(index)}/>
          </div>
      {/each}
  </div>
</section>

<div class="overlay-layout">
  <button class="close-button" on:click={closeOverlayLayout}>✖</button>
  <div class="wrapper">
    <div class="carousel-items">
      {#each data.props.posts as post, index}
      <div class="carousel-item">
        <h1 class="carousel-item-title">{post.title}</h1>
        <img src="{post.image.asset.url}" alt="{post.title}">
        <p class="carousel-item-description">{post.description}</p>
      </div>
      {/each}
    </div>
  </div>
  <div id="nextButton">→</div>
  <div id="prevButton">←</div>
</div>

  <style>

    .category-title {
      text-align: center;
      margin-bottom: 5vh;
    }

.gallery-grid {
  position: relative; /* Ensure proper stacking order with z-index */
    z-index: 1; /* Set a lower z-index for the gallery-grid */
    flex-grow: 1;
    width: 60vw;
    margin: 0 auto; /* Center the container horizontally */
}
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Adjust the total number of columns */
  grid-auto-rows: auto; /* You can adjust this value for the height of each row */
  gap: 20px; /* Adjust the gap between grid items as needed */
}

.grid-item {
  grid-column: span 2; /* Each grid item spans 2 columns */
}

.grid-image {
    max-width: 100%;
  height: auto;
  -webkit-box-shadow: 0px 25px 21px -9px rgba(0,0,0,0.2);
-moz-box-shadow: 0px 25px 21px -9px rgba(0,0,0,0.2);
box-shadow: 0px 25px 21px -9px rgba(0,0,0,0.2);
cursor: pointer;
}

.overlay-layout {
  position: fixed; /* Position the overlay-layout fixed */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw; /* Occupy full width of the viewport */
    height: 100vh; /* Occupy 80% of the viewport height */
    z-index: 2; /* Set a higher z-index for the overlay-layout */
    background: rgba(0, 0, 0, 0.36);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
padding-top: 5vh;
visibility: hidden;
}

.close-button {
  grid-area: 2 / 9 / 3 / 10;
  width: 2rem;
  height: 2rem;
  position: absolute;
  z-index: 2;
  font-size: 1.5rem;
  border: 0;
  background: transparent;
  margin-left: 85vw;
  color: white;
}

.close-button:hover {
  cursor: pointer;
}

.wrapper {
  position: absolute;
  margin-top: 12vh;
}

.wrapper::after {
  content: "";
  position: absolute;
}

.carousel-items {
  position: relative;
  margin-left: 10vw;
}

.carousel-item {
  position: absolute;
  width: 70vw;
  display: grid;
grid-template-columns: repeat(8, 1fr);
grid-template-rows: repeat(8, 1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
}

.carousel-item img {
  max-height: 60vh; /* Set the maximum height */
  width: auto; /* Let the width scale according to the aspect ratio */
  grid-area: 1 / 1 / 9 / 5;
  transition: transform 0.5s ease;
}

.carousel-item img:hover {
  z-index: 99;
  transform: scale(1.2);
}

.carousel-item-title {
  grid-area: 1 / 1 / 3 / 9;
  z-index: 2;
  mix-blend-mode: difference;
  color: white;
  font-size: 3em;
  margin-top: -5vh;
  margin-left: -5vw;
}

.carousel-item-description {
  margin-left: 10em;
  z-index: 0;
  grid-area: 5 / 5 / 6 / 9; 
  font-size: 1.15em;
  line-height: 1.6;
  text-align: left;
  color: white;
  mix-blend-mode: difference;
}

#nextButton {
  cursor: pointer;
  position: absolute;
  top: 70vh;
  left: 75vw;
  height: 2em;
  width: 2em;
  text-align: center;
  user-select: none;
  font-size: 2.5em;
  color: white;
}

#prevButton {
  cursor: pointer;
  position: absolute;
  top: 70vh;
  left: 70vw;
  height: 2em;
  width: 2em;
  text-align: center;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  font-size: 2.5em;
  color: white;
}
</style>