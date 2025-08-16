import client from '@/../tina/__generated__/client'
import { filterFalsy } from '@/lib/utils'

export async function getBoxes() {
	try {
		const conn = await client.queries.MaintenanceBoxConnection()
		const boxes = conn.data.MaintenanceBoxConnection.edges?.map(
			box => box?.node
		)

		return boxes?.filter(filterFalsy)
	} catch (err) {
		console.error(err)
	}
}
