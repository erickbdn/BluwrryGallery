<script>
    export let data;
    console.log(data)
    import { aboutMeStickyImage } from '$lib/utils/gsap'
    import { onMount, onDestroy } from "svelte";

    onMount(() => {
        aboutMeStickyImage();
    });
</script>

<section class="about-me-section-wrapper">
    <div class="about-me-section-title">
        <h1>About Me</h1>
    </div>
    <div class="about-me-content-wrapper">
        <div class="about-me-image-wrapper">
            <img src="{data.props.author[0].image.asset.url}">
            <h2>Christopher Ariel Endriputra Y.</h2>
        </div>
        <div class="about-me-content">
            <div class="profile-description-wrapper">
                <h2>Profile</h2>
                <p>{data.props.authorData.profileDesc}</p>
            </div>
            <div class="experience-wrapper">
                <h2>Experience</h2>
                {#each data.props.authorData.experiences as experience}
                <div class="content-text">
                  <h3>{experience.company}</h3>
                  <p>{experience.date}</p>
                  <p>{experience.desc}</p>
                  <ul>
                    {#each experience.jobDesc as desc}
                      <li>{desc}</li>
                    {/each}
                  </ul>
                </div>
              {/each}
            </div>
            <div class="education-wrapper">
                <h2>Education</h2>
                {#each data.props.authorData.educations as education}
                <div class="content-text">
                    <h3>{education.place}</h3>
                    <p>{education.description}</p>
                    <ul>
                        {#each education.activity as activity}
                        <li>{activity}</li>
                        {/each}
                    </ul>
                </div>
                {/each}
            </div>
            <div class="achievement-wrapper">
                <h2>Achievement</h2>
                {#each data.props.authorData.achievements as achievement}
                <div class="content-text">
                    <h3>{achievement.title}</h3>
                    <ul>
                        {#each achievement.activity as activity}
                        <li>{activity}</li>
                        {/each}
                    </ul>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .about-me-section-wrapper {
        width: 90vw;
        margin: 0 auto; /* Center the container horizontally */
    }

    .about-me-section-title {
        font-size: 2rem;
        text-align: left;
    }

    .about-me-content-wrapper {
        display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 10px;
grid-row-gap: 10px;
    }

    .about-me-image-wrapper {
        grid-area: 1 / 1 / 2 / 4;
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center; /* Align vertically */
    }

    .about-me-image-wrapper h2 {
        text-align: center;
        width: 50%;
    }

    .about-me-image-wrapper img {
        margin-top: 5vh;
        width: 50%; /* Ensure image fills container horizontally */
    height: 25%; /* Make image half the height of its container */
    object-fit: cover; /* Maintain aspect ratio and cover entire container */
    margin-bottom: 1rem;
    }

    .about-me-content {
        grid-area: 1 / 4 / 2 / 11;
        width: 80%;
        margin-left: 5vw;
        margin-top: 5vh;
        line-height: 1.5em;
    }

    .about-me-content h2 {
        margin-bottom: 1.5rem;
        border-bottom: 0.5px solid black;
        padding-bottom: 0.5rem;
        font-size: 1.75rem;
    }

    .profile-description-wrapper {
        margin-bottom: 4rem;
        hyphens: auto;
    }

    .profile-description-wrapper p {
        padding: 1rem;
    }

    .experience-wrapper {
        margin-bottom: 4rem;
    }

    .content-text {
        padding: 1rem;
    }

    .content-text h3 {
        margin-bottom: 1rem;
    }

    .content-text p{
        margin-bottom: 0.5rem;
    }

    .content-text ul {
        margin-top: 1rem;
    }

    .content-text li {
        margin-left: 2rem;
        margin-bottom: 0.25rem;
    }

    .education-wrapper {
        margin-bottom: 4rem;
    }

    .achievement-wrapper {
        margin-bottom: 4rem;
    }
</style>