import { Template } from 'tinacms'
import { ImageSchema, imageSchema } from './image'

export const contentSectionSchema = {
	type: 'object',
	name: 'contentSection',
	label: 'Content Section',
	required: true,
	fields: [
		{
			type: 'string',
			name: 'secLabel',
			label: 'Section Label',
			required: true,
		},
		{
			type: 'rich-text',
			name: 'body',
			label: 'Body',
			required: true,
		},
		imageSchema,
	],
} satisfies Template['fields'][number]

export type ContentSectionSchema = {
	secLabel: string
	body: string
	img: ImageSchema
}

export const contentSectionArraySchema = {
	...contentSectionSchema,
	name: 'contentSections',
	label: 'Content Sections',
	list: true,
	required: true,
	ui: {
		itemProps(item: ContentSectionSchema) {
			return { label: item.secLabel }
		},
	},
} satisfies Template['fields'][number]
