export default {
  name: 'lightReq',
  type: 'document',
  title: 'Light Requirements',
  fields: [
    {
      name: 'lightType',
      type: 'string',
      title: 'Type of Light',
    },
    {
      name: 'lightDescription',
      type: 'string',
      title: 'Description',
    },
    {
      title: 'Example',
      name: 'example',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
    },
    // {
    //   name: 'indirectSun',
    //   type: 'string',
    //   title: 'Indirect Sun',
    // },
    // {
    //   name: 'partialShade',
    //   type: 'string',
    //   title: 'Partial Shade',
    // },
    // {
    //   name: 'shade',
    //   type: 'string',
    //   title: 'Shade',
    // },
    // {
    //   name: 'growLight',
    //   type: 'string',
    //   title: 'Grow Light or I Kill It',
    // },
],
}
