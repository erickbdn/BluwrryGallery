import { fetchEntry } from "$lib/contentful"

export const load = async ({ params }) => {
    // Extract the entry ID from the params object
    const { entryId } = params;

    // Fetch the individual entry using its ID
    const entry = await fetchEntry(entryId);

    // Return the entry as the data to be passed to the page component
    return {
        entry,
    };
};
