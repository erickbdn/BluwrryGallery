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
                name: 'category',
                title: 'Category',
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
                        type: 'reference',
                        name: 'category',
                        title: 'Category',
                        to: [{type: 'category'}] // Reference to the category schema
                    },
                    {
                        type: 'image',
                        name: 'image',
                        title: 'Image'
                    }
                ]
            },
            {
                type: 'document',
                name: 'featured',
                title: 'Featured',
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
            },
            {
                type: 'document',
                name: 'authorData',
                title: 'AuthorData',
                fields: [
                    {
                        type: 'text',
                        name: 'profileDesc',
                        title: 'ProfileDesc'
                    },
                    {
                        type: 'array',
                        name: 'experiences',
                        title: 'Experiences',
                        of: [
                          {
                            type: 'object',
                            fields: [
                              {
                                type: 'string',
                                name: 'company',
                                title: 'Company'
                              },
                              {
                                type: 'string',
                                name: 'date',
                                title: 'Date'
                              },
                              {
                                type: 'text',
                                name: 'desc',
                                title: 'Desc'
                              },
                              {
                                type: 'array',
                                name: 'jobDesc',
                                title: 'JobDesc',
                                of: [{ type: 'text' }] // Define an array of text items (bullet points)
                              },
                              // Add more fields as needed for each experience
                            ]
                          }
                        ]
                      },
                      {
                        type: 'array',
                        name: 'educations',
                        title: 'Educations',
                        of: [
                          {
                            type: 'object',
                            fields: [
                              {
                                type: 'string',
                                name: 'place',
                                title: 'Place'
                              },
                              {
                                type: 'text',
                                name: 'description',
                                title: 'Description'
                              },
                              {
                                type: 'array',
                                name: 'activity',
                                title: 'Activity',
                                of: [{ type: 'text' }] // Define an array of text items (bullet points)
                              },
                              // Add more fields as needed for each experience
                            ]
                          }
                        ]
                      },
                      {
                        type: 'array',
                        name: 'achievements',
                        title: 'Achievements',
                        of: [
                          {
                            type: 'object',
                            fields: [
                              {
                                type: 'string',
                                name: 'title',
                                title: 'Title'
                              },
                              {
                                type: 'array',
                                name: 'activity',
                                title: 'Activity',
                                of: [{ type: 'text' }] // Define an array of text items (bullet points)
                              },
                              // Add more fields as needed for each experience
                            ]
                          }
                        ]
                      },
                ]
            }
        ]
    }
};
