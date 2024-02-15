//initialization for contentful
import { createClient } from 'contentful';

const client = createClient({

    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});

export async function fetchEntry(entryId) { //this is for fetching individual photo because each photo has unique entryid
    try {
        const entry = await client.getEntry(entryId);
        return entry;
    } catch (error) {
        console.error('Error fetching entry:', error);
        return null;
    }
}

export async function fetchPhotos() {
    try {
        const entries = await client.getEntries({
            content_type: 'photo', // Assuming 'photo' is the content type of your photos
            // You can add more query parameters here if needed
        });
        return entries.items; // Return the array of photo entries
    } catch (error) {
        console.error('Error fetching photos:', error);
        return null;
    }
}
  

export default client;