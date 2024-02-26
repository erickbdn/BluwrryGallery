import { deskTool } from 'sanity/desk';

export default {
    plugins: [deskTool()],
    name: 'SanityProject',
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: 'production',
    schema: {
        types: [
            {
                type: 'document',
                name: 'author',
                title: 'Author',
                fields: [
                    {
                        type: 'string',
                        name: 'name',
                        title: 'Name'
                    },
                    {
                        type: 'text',
                        name: 'description',
                        title: 'Description'
                    },
                    {
                        type: 'image',
                        name: 'image',
                        title: 'Image'
                    },
                    {
                        type: 'object',
                        name: 'socials',
                        title: 'Socials',
                        fields: [
                            {
                                type: 'string',
                                name: 'facebook',
                                title: 'Facebook'
                            },
                            {
                                type: 'string',
                                name: 'twitter',
                                title: 'Twitter'
                            },
                            {
                                type: 'string',
                                name: 'instagram',
                                title: 'Instagram'
                            }
                            // Add more social fields as needed
                        ]
                    }
                ]
            },
            {
                type: 'document',
                name: 'post',
                title: 'Post',
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        title: 'Title'
                    },
                    {
                        type: 'text',
                        name: 'description',
                        title: 'Description'
                    },
                    {
                        type: 'string',
                        name: 'category',
                        title: 'Category'
                    },
                    {
                        type: 'image',
                        name: 'image',
                        title: 'Image'
                    }
                ]
            }
        ]
    }
};
