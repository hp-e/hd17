export default {
    name: 'drawing',
    title: 'Drawing',
    type: 'document',
    fields: [
      {
        name: 'artist',
        title: 'Artist',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        }
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: []
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image'
      }
    }
  }
  