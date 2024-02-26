import { loadPost, loadAuthor } from '$lib/utils/sanityClient';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const { posts } = await loadPost({ params });
    const { author } = await loadAuthor({ params });
    return {
        props: {
            posts,
            author
        }
    };
}