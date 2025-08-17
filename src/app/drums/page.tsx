import { ProductBlock } from '@/components/product-block'
import { Metadata } from 'next'
import { getDrums } from './api'
import { Grid } from './grid'
import { createFilterValues } from '@/lib/utils'

export const metadata: Metadata = {
	title: 'Drums',
	description: 'The catalog of drums we offer.',
}

export default async function DrumsPage() {
	const drums = await getDrums()

	if (!drums) {
		return (
			<div>
				<p>No Toners available right now.</p>
			</div>
		)
	}

	const filters = createFilterValues(['make'], drums)

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="relative mb-4 flex">
				<hr className="border-primary absolute top-1/2 left-0 w-full border-[1.5px]" />
				<h1 className="font-primary text-primary relative bg-white px-6 text-3xl font-bold sm:text-4xl">
					All Drums
				</h1>
			</div>
			<div className="grid gap-4 lg:grid-cols-[240px_1fr]">
				<Grid filters={filters} drums={drums} />
			</div>
		</div>
	)
}
