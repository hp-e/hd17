export default {
    name: 'images',
    title: 'Images',
    type: 'document',
    fields: [
      {
        name: 'Title',
        title: 'title',
        type: 'string'
      },
    
      {
        name: 'photographer',
        title: 'Photographer',
        type: 'string'
      },
      {
        name: 'key',
        title: 'key',
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
  