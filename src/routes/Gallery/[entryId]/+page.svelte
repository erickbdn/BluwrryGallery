<script>
    export let data;
    console.log(data)
</script>

<figure>
    <img src={data.entry.fields.image.fields.file.url} alt={data.entry.fields.image.fields.file.title} />
    <figcaption>
        <h2>{data.entry.fields.title}</h2>
        <p>{data.entry.fields.desc}</p>
    </figcaption>
</figure>
