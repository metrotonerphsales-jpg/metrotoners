import { NextJSPageProps } from '@/types'
import { searchProducts } from './api'
import { Grid } from './grid'

export default async function SearchPage({ searchParams }: NextJSPageProps) {
	const { q } = await searchParams
	const results = await searchProducts(String(q))

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="relative mb-4 flex">
				<hr className="border-primary absolute top-1/2 left-0 w-full border-[1.5px]" />
				<h1 className="font-primary text-primary relative bg-white px-6 text-3xl font-bold sm:text-4xl">
					Search Results
				</h1>
			</div>
			<Grid products={results} />
		</div>
	)
}
