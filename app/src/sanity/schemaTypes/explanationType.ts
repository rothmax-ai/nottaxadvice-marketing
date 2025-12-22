import { defineField, defineType } from 'sanity'

export const explanationType = defineType({
  name: 'explanation',
  title: 'Explanation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(220),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Start here', value: 'start-here' },
          { title: 'Roth conversions', value: 'roth-conversions' },
          { title: 'Tax brackets & income', value: 'tax-brackets' },
          { title: 'IRMAA & Medicare', value: 'irmaa' },
          { title: 'Capital gains', value: 'capital-gains' },
          { title: 'RMDs', value: 'rmds' },
          { title: 'Glossary', value: 'glossary' },
          { title: 'Methodology', value: 'methodology' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Optional: controls ordering within category (lower = earlier).',
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
})