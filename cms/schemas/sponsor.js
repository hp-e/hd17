export default {
    name: 'sponsor',
    title: 'Sponsor',
    type: 'document',
    fields: [
      {
        name: 'company',
        title: 'Company',
        type: 'string'
      },
    
      {
        name: 'website',
        title: 'Website',
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
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: false
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
  