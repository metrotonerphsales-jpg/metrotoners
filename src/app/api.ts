import client from '@/../tina/__generated__/client'

export async function getGlobalData() {
	const { data } = await client.queries.Global({ relativePath: 'global.md' })
	return data.Global
}
