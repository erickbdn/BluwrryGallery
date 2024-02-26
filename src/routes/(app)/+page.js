import { loadPost } from '$lib/utils/sanityClient';

export async function load({ params }) {
    const { pets } = await loadPost({ params });
    console.log('Fetched pets:', pets); // Log the fetched data to the console
    return {
        props: {
            pets
        }
    };
}