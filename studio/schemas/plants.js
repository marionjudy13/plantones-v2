export default {
  name: 'plants',
  type: 'document',
  title: 'Plants',
  fields: [
    {
      name: 'commonName',
      type: 'string',
      title: 'Common Name',
    },
    {
      name: 'scientificName',
      type: 'string',
      title: 'Scientific Name',
    },
    {
      title: 'Plant Image',
      name: 'plantImage',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
    },
    {
      name: 'lightReq',
      type: 'string',
      title: 'Light Requirements',
    },
    {
      name: 'dirtReq',
      type: 'string',
      title: 'Dirt Requirements',
    },
  ],
}
