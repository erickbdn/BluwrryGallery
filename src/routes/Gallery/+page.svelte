<script>
    import { onMount } from 'svelte';
    import { fetchPhotos } from '$lib/contentful';
    import Shell from '../Shell.svelte'
  
    let photos = []; // Initialize an empty array to store the fetched photos
  
    onMount(async () => {
        try {
            photos = await fetchPhotos();
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    });
  </script>
  
  <Shell>
    {#each photos as photo}
      <div>
        <h2>{photo.fields.title}</h2>
        <p>{photo.fields.desc}</p>
        <img src={photo.fields.image.fields.file.url} alt={photo.fields.title} />
      </div>
  {/each}
  </Shell>
  