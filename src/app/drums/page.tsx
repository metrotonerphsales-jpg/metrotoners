import { ProductBlock } from '@/components/product-block'
import { Metadata } from 'next'
import { getDrums } from './api'

export const metadata: Metadata = {
	title: 'Drums',
	description: 'The catalog of drums we offer.',
}

export default async function DrumsPage() {
	const drums = await getDrums()

	if (!drums) {
		throw new Error('server error')
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="relative mb-4 flex">
				<hr className="border-primary absolute top-1/2 left-0 w-full border-[1.5px]" />
				<h1 className="font-primary text-primary relative bg-white px-6 text-3xl font-bold sm:text-4xl">
					All Drums
				</h1>
			</div>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{drums.map(drum => (
					<ProductBlock
						key={drum.name}
						title={drum.name}
						subtitle={drum.make}
						price={drum.price}
						src={drum.images[0].src}
						alt={drum.images[0].alt ?? ''}
						url={`/drums/${drum._sys.filename}`}
					/>
				))}
			</div>
		</div>
	)
}
