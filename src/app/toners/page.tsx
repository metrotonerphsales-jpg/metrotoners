import { ProductBlock } from '@/components/product-block'
import client from '@/../tina/__generated__/client'
import { filterFalsy } from '@/lib/utils'
import { Metadata } from 'next'

export async function getToners() {
	try {
		const conn = await client.queries.TonerConnection()
		const toners = conn.data.TonerConnection.edges?.map(toner => toner?.node)

		return toners?.filter(filterFalsy)
	} catch (err) {
		console.error(err)
	}
}

export const metadata: Metadata = {
	title: 'Toners',
	description: 'The catalog of toners we offer.',
}

export default async function TonersPages() {
	const toners = await getToners()

	if (!toners) {
		throw new Error('server error')
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="relative mb-4 flex">
				<hr className="border-primary absolute top-1/2 left-0 w-full border-[1.5px]" />
				<h1 className="font-primary text-primary relative bg-white px-6 text-3xl font-bold sm:text-4xl">
					All Toners
				</h1>
			</div>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{toners.map(toner => (
					<ProductBlock
						key={toner.name}
						title={toner.name}
						subtitle={toner.make}
						price={toner.price}
						src={toner.images[0].src}
						alt={toner.images[0].alt ?? ''}
						url={`/toners/${toner._sys.filename}`}
					/>
				))}
			</div>
		</div>
	)
}
