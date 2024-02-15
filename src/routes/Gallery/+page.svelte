<script>
    export let data;
    const { photos } = data;
  </script>
  
{#each photos as photo}
<a href={`/Gallery/${photo.sys.id}`}>
  <figure>
    <img src={photo.fields.image.fields.file.url} alt={photo.fields.image.fields.title} />
    <figcaption>
      <h2>{photo.fields.title}</h2>
      <p>{photo.fields.desc}</p>
    </figcaption>
  </figure>
</a>
{/each}

   

  