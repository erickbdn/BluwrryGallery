import { loadPost, loadAuthor, loadFeatured } from '$lib/utils/sanityClient';


/** @type {import('./$types').LayoutLoad} */
export async function load({ params }) {
    const { posts } = await loadPost({ params });
    const { author } = await loadAuthor({ params });
    const { featured } = await loadFeatured ({ params });
    return {
        props: {
            posts,
            author,
            featured,
        }
    };
}