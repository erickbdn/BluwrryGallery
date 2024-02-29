<script>
    export let data;
    console.log(data)
</script>

<section class="gallery-grid">
    <div class="masonry-grid">
        {#each data.props.posts as post}
          <div class="grid-item">
            <img src="{post.image.asset.url}" alt="{post.title}" class="grid-image" />
            <h2>{post.title}</h2>
          </div>
        {/each}
      </div>
</section>


  <style>

.masonry-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Adjust the total number of columns */
  grid-auto-rows: auto; /* You can adjust this value for the height of each row */
  gap: 20px; /* Adjust the gap between grid items as needed */
}

.grid-item {
  grid-column: span 2; /* Each grid item spans 2 columns */
  overflow: hidden;
}

.grid-image {
    max-width: 100%;
  height: auto;
}
  </style>