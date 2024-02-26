<script>
    /** @type {import('./$types').PageData} */
    export let data; // Assuming `pets` is the data fetched from Sanity
 

</script>

    <!-- This is Hero Section -->
    <section class="hero-wrapper">
        <h1 class="hero-title">CHRISTOPHER ARIEL'S WEBPAGE</h1>
        <div class="image-wrapper-1">
            
        </div>
        <div class="image-wrapper-2">

        </div>
        <div class="image-wrapper-3">

        </div>
        <div class="image-wrapper-4">

        </div>
        <div class="image-wrapper-5">

        </div>
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
    
        </div>
    </section>

    <!-- This is Navigation Section -->
    <section class="nav-section">
        <figure class="nav-image-container">
            <img/>
        </figure>
        <nav class="nav-links-container">
            <ul>
                <li><a href="/about">About Me</a></li>
                <li><a href="/Gallery">Gallery</a></li>
                <li><a href="/lightroom">Lightroom</a></li>
            </ul>
        </nav>
    </section>

    <style>
        /* Hero Section Styling */
        .hero-wrapper {
               display: grid;
               grid-template-columns: repeat(10, 1fr);
               grid-template-rows: repeat(10, 1fr);
               grid-column-gap: 10px;
               grid-row-gap: 10px;
               background-color: aqua;
           }
       
           .hero-title {
               grid-area: 3 / 1 / 9 / 11;
               text-align: center;
           }
       
           .image-wrapper-1 { 
               grid-area: 1 / 7 / 4 / 9; 
               background-color: blue;
           }
       
           .image-wrapper-2 { 
               grid-area: 5 / 8 / 7 / 11;
               background-color: blue;
           }
       
           .image-wrapper-3 { 
               grid-area: 2 / 2 / 5 / 4;
               background-color: blue;
           }
       
           .image-wrapper-4 { 
               grid-area: 7 / 5 / 11 / 7; 
               background-color: blue;
           }
       
           .image-wrapper-5 { 
               grid-area: 6 / 1 / 9 / 4; 
               background-color: blue;
           }
       
           /* About Section Styling */
           .about-wrapper {
               display: grid;
               grid-template-columns: repeat(10, 1fr);
               grid-template-rows: repeat(10, 1fr);
               grid-column-gap: 10px;
               grid-row-gap: 10px;
           }
       
           .about-title {
               grid-area: 1 / 3 / 4 / 10;
           }
       
           .image-wrapper {
            z-index: -1;
               grid-area: 2 / 1 / 11 / 6;
               width: 100%; /* Ensure the wrapper takes up the entire grid cell */
                height: 100%; /* Ensure the wrapper takes up the entire grid cell */
                overflow: hidden; /* Hide any overflow from the image */
           }

           .image-wrapper img {
                width: 100%; /* Make the image fill the width of the wrapper */
                height: auto; /* Let the height adjust automatically based on the image */
           }
       
           .about-me-name {
               grid-area: 6 / 6 / 9 / 11;
           }
       
           .about-me-description {
               grid-area: 6 / 6 / 11 / 11;
           }
       
           .icons-wrapper {
               grid-area: 10 / 6 / 11 / 11;
           }
       
           /* Nav Section Styling */
           .nav-section {
               display: grid;
               grid-template-columns: repeat(4, 1fr);
               grid-template-rows: repeat(10, 1fr);
               grid-column-gap: 10px;
               grid-row-gap: 10px;
           }
       
           .nav-links-container { 
               grid-area: 2 / 1 / 5 / 5; 
           }
       
           .nav-image-container { 
               grid-area: 1 / 2 / 8 / 4; 
           }
       </style>


