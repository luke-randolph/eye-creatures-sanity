import {defineArrayMember, defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(128),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 64},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Shirt', value: 'shirt'},
          {title: 'Tape', value: 'tape'},
          {title: 'CD', value: 'cd'},
          {title: 'Stickers', value: 'stickers'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (dollars)',
      type: 'number',
      description: 'Whole dollars. Stored as an integer (e.g. 25 = $25).',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      description: 'Leave empty for items without sizes (tapes, CDs, stickers).',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'S', value: 'S'},
          {title: 'M', value: 'M'},
          {title: 'L', value: 'L'},
          {title: 'XL', value: 'XL'},
          {title: '2XL', value: '2XL'},
          {title: '3XL', value: '3XL'},
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'colors',
      title: 'Color variants',
      type: 'array',
      description: 'Leave empty if the product has no color variants.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'colorVariant',
          title: 'Color variant',
          fields: [
            defineField({
              name: 'hex',
              title: 'Hex color',
              type: 'string',
              validation: (Rule) =>
                Rule.required().regex(/^#[0-9a-fA-F]{6}$/, {name: 'hex'}),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'label', subtitle: 'hex', media: 'image'},
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'category', media: 'mainImage'},
  },
})
