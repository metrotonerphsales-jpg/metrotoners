import client from '@/../tina/__generated__/client'
import { filterFalsy } from '@/lib/utils'

export async function getDrums() {
	try {
		const conn = await client.queries.DrumConnection()
		const drums = conn.data.DrumConnection.edges?.map(drum => drum?.node)

		return drums?.filter(filterFalsy)
	} catch (err) {
		console.error(err)
	}
}
