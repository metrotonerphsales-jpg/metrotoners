import { defineConfig } from 'tinacms'

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
		],
	},
})
