import { ProductBlock } from '@/components/product-block'
import client from '@/../tina/__generated__/client'
import { filterFalsy } from '@/lib/utils'
import { Metadata } from 'next'

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

export const metadata: Metadata = {
	title: 'Maintenance Boxes',
	description: 'The catalog of maintenance boxes we offer.',
}

export default async function MaintenanceBoxesPage() {
	const boxes = await getBoxes()

	if (!boxes) {
		throw new Error('server error')
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="relative mb-4 flex">
				<hr className="border-primary absolute top-1/2 left-0 w-full border-[1.5px]" />
				<h1 className="font-primary text-primary relative bg-white px-6 text-3xl font-bold sm:text-4xl">
					All Boxes
				</h1>
			</div>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{boxes.map(box => (
					<ProductBlock
						key={box.name}
						title={box.name}
						subtitle={box.make}
						price={box.price}
						src={box.images[0].src}
						alt={box.images[0].alt ?? ''}
						url={`/maintenance-boxes/${box._sys.filename}`}
					/>
				))}
			</div>
		</div>
	)
}
