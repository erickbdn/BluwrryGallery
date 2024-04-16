/** @type {import('./$types').PageLoad} */

export async function load ({parent, params}) {
    const data = await parent();
    const { category } = params;

    // Filter the posts based on the category
    const filteredPosts = data.props.posts.filter(post => post.category.name === category);

    // Return the filtered data
    return {
        props: {
            posts: filteredPosts,
        }
    };
}