<script>
    import { initThumbnailClickHandlers, categoryAnim} from '$lib/utils/gsap'
/** @type {import('./$types').PageData} */
export let data;
import { onMount, onDestroy } from "svelte";

onMount(() => {
    initThumbnailClickHandlers();
    categoryAnim()
    });
</script>

<!-- featured section -->
<section class="featured-container">
    <div class="featured-title"> 
        <h2>Featured</h2> 
    </div>
    <div class="featured-image">
        <img src="{data.props.featured[0].image.asset.url}" alt="{data.props.featured[0].title}"/>
    </div>
    
    {#each data.props.featured as { image, title }, i}
    <div class="featured-thumbnail-{i + 1}">
      <img src={image.asset.url} alt="{title}" />
    </div>
  {/each}
    
    <div class="featured-photo-title">
        <h2>{data.props.featured[0].title}</h2>
    </div>
</section>

<!-- try embedding scroll anim from codepen gsap  -->
<section class="category-section">
    <div class="category-section-title">
        <h2>Category</h2>
    </div>
    {#each data.props.posts.filter((post, index, array) => array.findIndex(p => p.category === post.category) === index) as post}
    <div class="category-menu-container">
        <div class="category-text">
            <div class="category-title"><a href='Gallery/{post.category}'><h2>{post.category}</h2></a></div>
            <div class="category-desc">{post.description}</div>
        </div>
        <div class="category-image"> 
            <div class="img-container">
                <img src={post.image.asset.url} />
            </div>
        </div>
    </div> 
    {/each}
</section>

<style>
    .featured-container {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(8, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        height: 90vh;
       overflow: hidden;
       width: 90vw;
        margin: 0 auto; /* Center the container horizontally */
        margin-bottom: 20vh;
    }

    .featured-image { 
        grid-area: 2 / 2 / 8 / 8;
        position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
    }

/* Adjust image size to fit the container */
.featured-image img {
    position: absolute; /* Position the image within its container */
    width: 100%; /* Ensure image fills container horizontally */
    height: 100%; /* Ensure image fills container vertically */
    object-fit: cover; /* Maintain aspect ratio and cover entire container */
}

.featured-thumbnail-1 { 
    grid-area: 2 / 9 / 3 / 10; 
    position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}
.featured-thumbnail-2 {
     grid-area: 3 / 9 / 4 / 10; 
    position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}
.featured-thumbnail-3 { 
    grid-area: 4 / 9 / 5 / 10;
    position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}
.featured-thumbnail-4 { 
    grid-area: 5 / 9 / 6 / 10; 
    position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}
.featured-thumbnail-5 { 
    grid-area: 6 / 9 / 7 / 10;
    position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}
.featured-thumbnail-6 { 
    grid-area: 7 / 9 / 8 / 10;
    position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}

[class^="featured-thumbnail-"] img {
    position: absolute; /* Position the image within its container */
    width: 100%; /* Ensure image fills container horizontally */
    height: 100%; /* Ensure image fills container vertically */
    object-fit: cover; /* Maintain aspect ratio and cover entire container */
}


    .featured-title { 
        grid-area: 1 / 1 / 2 / 4; 
    }

    .featured-photo-title { 
        writing-mode: vertical-lr;
        transform: rotate(180deg); /* Rotate the text by 180 degrees */
        grid-area: 2 / 1 / 8 / 2;
    }

    /* styling for embedded gsap section */

    .category-section {
        width: 90vw;
        margin: 0 auto; /* Center the container horizontally */
    }

   .category-menu-container {
  display: flex;
  align-items: stretch;
  min-height: 50vh;
  max-height: 50vh;
  overflow: hidden;
}

.category-text {
  flex: 1; /* Take up 50% of the width */
  padding: 0 20px; /* Add padding as needed */
  padding-top: 15vh;
}

.category-title {
    font-size: 1.5rem;
    text-align: left;
    padding-left: 10rem;
}

.category-desc {
    text-align: left;
    padding-left: 10rem;
}

.category-title a {
    text-decoration: none;
    color: inherit;
}

  .category-image {
    flex: 1; /* Take up 50% of the width */
    position: relative;
    width: min(80vw, 50vh);
  }

  .img-container {
    width: 100%;
      padding-top: 80%;
      position: relative;
      overflow: hidden;
      height: 100%;
  }

  .img-container img {
    object-fit: cover; /* Ensure the image covers the container */
    width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%) scale(1.4);
        transform-origin: 50% 50%;
  }
</style>