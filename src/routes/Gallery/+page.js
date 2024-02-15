import { fetchPhotos } from '$lib/contentful';

export const load = async () => {
    const photos = await fetchPhotos();
    return {
        photos,   
    }
}