import client from '@/../tina/__generated__/client'
import { filterFalsy } from '@/lib/utils'

export async function getToners() {
	try {
		const conn = await client.queries.TonerConnection()
		const toners = conn.data.TonerConnection.edges?.map(toner => toner?.node)

		return toners?.filter(filterFalsy)
	} catch (err) {
		console.error(err)
	}
}
