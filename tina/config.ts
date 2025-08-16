import { defineConfig } from 'tinacms'
import { imageArraySchema, imageSchema } from './schema/image'

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	'main'

export default defineConfig({
	branch,
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	token: process.env.TINA_TOKEN,
	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'public',
		},
	},
	schema: {
		collections: [
			{
				name: 'Global',
				label: 'Global',
				path: 'content/global',
				fields: [
					{
						type: 'string',
						name: 'email',
						label: 'Email',
						required: true,
					},
					{
						type: 'object',
						name: 'addresses',
						label: 'Addresses',
						list: true,
						fields: [
							{
								type: 'string',
								name: 'name',
								label: 'Name',
								required: true,
							},
							{
								type: 'string',
								name: 'address',
								label: 'Address',
								required: true,
							},
							{
								type: 'string',
								name: 'tel',
								label: 'Telephone Number(s)',
								required: true,
							},
						],
						required: true,
						ui: {
							itemProps(props) {
								return { label: props.name }
							},
						},
					},
					{
						type: 'string',
						name: 'shopee_url',
						label: 'Shopee URL',
						required: true,
					},
					{
						type: 'string',
						name: 'facebook_url',
						label: 'Facebook URL',
						required: true,
					},
				],
				ui: {
					allowedActions: {
						create: false,
						delete: false,
					},
				},
			},
			{
				name: 'ContactPage',
				label: 'Contact Us Page',
				path: 'content/pages/contact-us',
				fields: [
					{
						type: 'string',
						name: 'maps_url',
						label: 'Google Maps Embed Link',
						required: true,
					},
				],
				ui: {
					allowedActions: {
						create: false,
						delete: false,
					},
					router: () => '/contact-us',
				},
			},
			{
				name: 'Toner',
				label: 'Toners',
				path: 'content/toners',
				ui: {
					router: props => `/toners/${props.document._sys.filename}`,
				},
				fields: [
					{
						type: 'string',
						name: 'name',
						label: 'Name',
						isTitle: true,
						required: true,
					},
					{
						type: 'string',
						name: 'make',
						label: 'Make',
						required: true,
					},
					{
						type: 'number',
						name: 'price',
						label: 'Price',
						required: true,
					},
					imageArraySchema,
					{
						type: 'string',
						name: 'url',
						label: 'URL',
					},
					{
						type: 'rich-text',
						name: 'description',
						label: 'Description',
						isBody: true,
						required: true,
					},
				],
			},
			{
				name: 'Drum',
				label: 'Drums',
				path: 'content/drums',
				ui: {
					router: props => `/drums/${props.document._sys.filename}`,
				},
				fields: [
					{
						type: 'string',
						name: 'name',
						label: 'Name',
						isTitle: true,
						required: true,
					},
					{
						type: 'string',
						name: 'make',
						label: 'Make',
						required: true,
					},
					{
						type: 'number',
						name: 'price',
						label: 'Price',
						required: true,
					},
					imageSchema,
					{
						type: 'rich-text',
						name: 'description',
						label: 'Description',
						isBody: true,
						required: true,
					},
				],
			},
			{
				name: 'MaintenanceBox',
				label: 'Maintenance Boxes',
				path: 'content/maintenance-boxes',
				ui: {
					router: props => `/maintenance-boxes/${props.document._sys.filename}`,
				},
				fields: [
					{
						type: 'string',
						name: 'name',
						label: 'Name',
						isTitle: true,
						required: true,
					},
					{
						type: 'string',
						name: 'make',
						label: 'Make',
						required: true,
					},
					{
						type: 'number',
						name: 'price',
						label: 'Price',
						required: true,
					},
					imageSchema,
					{
						type: 'rich-text',
						name: 'description',
						label: 'Description',
						isBody: true,
						required: true,
					},
				],
			},
		],
	},
	search: {
		tina: {
			stopwordLanguages: ['eng'],
		},
		indexBatchSize: 50,
		maxSearchIndexFieldLength: 100,
	},
})
