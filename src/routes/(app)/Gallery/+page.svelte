<script>
/** @type {import('./$types').PageData} */
export let data;
import { onMount, onDestroy } from "svelte";
import { initThumbnailClickHandlers } from '$lib/utils/gsap'

onMount(() => {
    initThumbnailClickHandlers();
    });
</script>

<div class="featured-container">
    <div class="featured-title"> 
        <h2>Featured</h2> 
    </div>
    <div class="featured-image">
        <img src="{data.props.featured[0].image.asset.url}" alt="Featured Image"/>
    </div>
    
    <div class="featured-thumbnail-1"> 
        <img src="{data.props.featured[0].image.asset.url}" alt="Featured Image"/>
    </div>
    <div class="featured-thumbnail-2"> 
        <img src="{data.props.featured[1].image.asset.url}" alt="Featured Image"/>
    </div>
    <div class="featured-thumbnail-3"> 
        <img src="{data.props.featured[2].image.asset.url}" alt="Featured Image"/>
    </div>
    <div class="featured-thumbnail-4"> 
        <img src="{data.props.featured[3].image.asset.url}" alt="Featured Image"/>
    </div>
    <div class="featured-thumbnail-5"> 
        <img src="{data.props.featured[4].image.asset.url}" alt="Featured Image"/>
    </div>
    <div class="featured-thumbnail-6"> 
        <img src="{data.props.featured[5].image.asset.url}" alt="Featured Image"/>
    </div>
    
    <div class="featured-photo-title">
        <h2>{data.props.featured[0].title}</h2>
    </div>
</div>

<style>
    .featured-container {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        height: 90vh;
        width: 80vw;
        overflow: hidden;
        margin: 0 auto; /* Center the container horizontally */
    }

    .featured-image { 
        grid-area: 3 / 2 / 9 / 8;
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
    grid-area: 3 / 9 / 4 / 10; 
    position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}
.featured-thumbnail-2 {
     grid-area: 4 / 9 / 5 / 10; 
    position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}
.featured-thumbnail-3 { 
    grid-area: 5 / 9 / 6 / 10; 
    position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}
.featured-thumbnail-4 { 
    grid-area: 6 / 9 / 7 / 10; 
    position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}
.featured-thumbnail-5 { 
    grid-area: 7 / 9 / 8 / 10; 
    position: relative; /* Ensure image respects container size */
        width: 100%;
        height: 100%;
}
.featured-thumbnail-6 { 
    grid-area: 8 / 9 / 9 / 10; 
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
        grid-area: 3 / 1 / 9 / 2; 
    }

</style>