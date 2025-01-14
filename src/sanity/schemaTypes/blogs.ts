export const blog = {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title of the blog article',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug of the blog article',
            type: 'slug',
            options: {
                source: 'title',
            },
        },
        {
            name: 'description',
            title: 'Small description of the blog article',
            type: 'text',
        },
        {
            name: 'titleImage',
            title: 'Title Image',
            type: 'image',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }

        ]
}
