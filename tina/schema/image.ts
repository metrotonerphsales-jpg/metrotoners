import { Template } from 'tinacms'

export const imageSchema = {
	type: 'object',
	name: 'image',
	label: 'Image',
	required: true,
	fields: [
		{
			type: 'image',
			name: 'src',
			label: 'URL',
			required: true,
		},
		{
			type: 'string',
			name: 'alt',
			label: 'Caption',
			required: true,
		},
	],
} satisfies Template['fields'][number]

export type ImageSchema = {
	src: string
	alt: string
}

export const imageArraySchema = {
	...imageSchema,
	name: 'images',
	label: 'Images',
	list: true,
	required: true,
	ui: {
		itemProps(item) {
			return { label: item.alt }
		},
	},
} satisfies Template['fields'][number]
