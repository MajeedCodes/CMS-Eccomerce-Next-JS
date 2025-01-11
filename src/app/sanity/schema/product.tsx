import { Rule } from '@sanity/types';

export const product = {
    
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required().min(3).max(100),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 5,
      validation: (Rule: Rule) => Rule.required().min(10).max(500),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: Rule) => Rule.required().positive().precision(2),
    },
    {
      name: 'image',
      type: 'array',
      title: 'images',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
      validation: (Rule: Rule) =>
        Rule.required().min(1).error('At least one image is required.'),
    },
    {
      name: 'stock',
      type: 'number',
      title: 'Stock',
      validation: (Rule: Rule) => Rule.required().integer().min(0),
    },
    {
      name: 'sku',
      type: 'string',
      title: 'SKU',
      description: 'Stock Keeping Unit',
      validation: (Rule: Rule) => Rule.required().min(3).max(20),
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Product',
      description: 'Mark this product as featured',
    },
    {
      name: 'metaDescription',
      type: 'string',
      title: 'Meta Description',
      description: 'Short description for SEO (max 160 characters)',
      validation: (Rule: Rule) => Rule.max(160),
    },
  ],
};
