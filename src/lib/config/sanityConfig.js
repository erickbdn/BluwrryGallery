import { deskTool } from 'sanity/desk';
 //tutorial from Chris Jayden
export default {
    plugins: [deskTool()],
    name: 'SanityProject',
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // Replace with your project ID
    dataset: 'production',
    schema: {
        types: [
            {
                type: 'document',
                name: 'post',
                title: 'Post',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        title: 'Title'
                    }
                ]
            }
        ]
    }
};