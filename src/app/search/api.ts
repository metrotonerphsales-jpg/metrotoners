import client from '@/../tina/__generated__/client'
import { filterFalsy } from '@/lib/utils'

export async function searchProducts(query: string) {
	const q = query.toLowerCase()

	const [toners, drums, boxes] = await Promise.all([
		client.queries.TonerConnection(),
		client.queries.DrumConnection(),
		client.queries.MaintenanceBoxConnection(),
	])

	const allDocs = [
		...(toners.data.TonerConnection.edges?.map(e => e?.node) ?? []),
		...(drums.data.DrumConnection.edges?.map(e => e?.node) ?? []),
		...(boxes.data.MaintenanceBoxConnection.edges?.map(e => e?.node) ?? []),
	]

	return allDocs
		.filter(filterFalsy)
		.filter(
			doc =>
				doc.name.toLowerCase().includes(q) ||
				doc.make.toLowerCase().includes(q) ||
				('type' in doc && doc.type.toLowerCase().includes(q))
		)
}
