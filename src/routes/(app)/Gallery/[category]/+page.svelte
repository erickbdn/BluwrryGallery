<script>
    export let data;
    import { onMount } from 'svelte';


    let currentIndex = null;
    let overlayVisible = false; // Variable to track overlay visibility

    function showOverlayLayout(index) {
        currentIndex = index;
        overlayVisible = true;
        updatePhotos();
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % data.props.posts.length;
        updatePhotos();
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + data.props.posts.length) % data.props.posts.length;
        updatePhotos();
    }

    function updatePhotos() {
        // Logic to update the source of current, previous, and next photos based on currentIndex
    }

    function closeOverlayLayout() {
        currentIndex = null; // Reset currentIndex to hide the overlay layout
        overlayVisible = false; // Hide the overlay layout
    }
</script>

<section class="gallery-grid">
  <div class="masonry-grid">
      {#each data.props.posts as post, index}
          <div class="grid-item"> <!-- Pass index -->
              <img src="{post.image.asset.url}" alt="{post.title}" class="grid-image" on:click={() => showOverlayLayout(index)} />
          </div>
      {/each}
  </div>
</section>

<div class="overlay-layout" style="{overlayVisible ? 'display: block;' : 'display: none;'}"> <!-- Hide by default -->
  <button class="close-button" on:click={closeOverlayLayout}>x</button> <!-- Close button -->
  <div class="photo-list">
    <h2 class="current-title">{currentIndex !== null ? data.props.posts[currentIndex].title : ''}</h2>
    <div class="detail-list">
      {currentIndex !== null ? data.props.posts[currentIndex].description: ''}
      </div>
      <div class="photo-wrapper">
          <div class="photo current-photo">
              <div class="photo-wrapper-image">
                  <img src={currentIndex !== null ? data.props.posts[currentIndex].image.asset.url : ''} alt="" />
              </div>
          </div>

          <div class="photo next-photo">
              <div class="photo-wrapper-image">
                  <img src={currentIndex !== null ? data.props.posts[(currentIndex + 1) % data.props.posts.length].image.asset.url : ''} alt="" />
              </div>
          </div>

          <div class="photo previous-photo">
              <div class="photo-wrapper-image">
                  <img src={currentIndex !== null ? data.props.posts[(currentIndex - 1 + data.props.posts.length) % data.props.posts.length].image.asset.url : ''} alt="" />
              </div>
          </div>
      </div>
      <button class="left-button" on:click={showPreviousImage}>
        <div class="icon">
            <p>left</p>
        </div>
    </button>
      <button class="right-button" on:click={showNextImage}>
          <div class="icon">
              <p>right</p>
          </div>
      </button>
  </div>
</div>


  <!-- <div class="detail-list">
      <div class="detail-wrapper">
          <div class="detail current-detail">
              <p>current</p>
          </div>

          <div class="detail next-detail">
            <p>next</p>
          </div>

          <div class="detail previous-detail">
            <p>prev</p>
          </div>
      </div>
  </div>
</div> -->
  
  <style>

.gallery-grid {
  position: relative; /* Ensure proper stacking order with z-index */
    z-index: 1; /* Set a lower z-index for the gallery-grid */
    height: 60vh;
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
    background: rgba(255, 255, 255, 0.192);

backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
}

.close-button {
  width: 16px;
  height: 16px;
  position: relative;
  left: 80vw;
}

.current-title {
  grid-area: 1 / 2 / 4 / 10; 
  z-index: 1;
  font-size: 8rem;
  color: white;
  mix-blend-mode: difference;
}

.photo-list {
  display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(10, 1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
height: 80vh;
}

.photo-wrapper {
  grid-area: 3 / 1 / 9 / 11;
  display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
height: 100%;
}

.current-photo {
  grid-area: 1 / 3 / 7 / 9;
  position: relative; /* Ensure image respects container size */
        height: 150%;
        top: -15%;
        display: flex; /* Use flexbox for centering */
    justify-content: center; /* Center horizontally */
}

.current-photo img {
    max-width: 100%; /* Ensure the image doesn't exceed its container width */
    max-height: 100%; /* Ensure the image doesn't exceed its container height */
    object-fit: contain; /* Maintain aspect ratio and fit within container */
  }

.next-photo {
  grid-area: 1 / 10 / 7 / 11;
  position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}

.next-photo img {
  position: absolute; /* Position the image within its container */
    width: 100%; /* Ensure image fills container horizontally */
    height: 100%; /* Ensure image fills container vertically */
    object-fit: cover; /* Maintain aspect ratio and cover entire container */
}

.previous-photo {
  grid-area: 1 / 1 / 7 / 2;
  position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}

.previous-photo img {
  position: absolute; /* Position the image within its container */
    width: 100%; /* Ensure image fills container horizontally */
    height: 100%; /* Ensure image fills container vertically */
    object-fit: cover; /* Maintain aspect ratio and cover entire container */
}

.left-button {
  grid-area: 9 / 2 / 10 / 3; 
}

.right-button {
  grid-area: 9 / 9 / 10 / 10;
}

.detail-list {
  grid-area: 9 / 3 / 11 / 9;
  position: relative;
  top: 120%;
}
  </style>