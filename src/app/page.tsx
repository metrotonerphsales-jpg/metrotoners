// import { ProductBlock } from '@/components/product-block'

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="relative mb-4 flex justify-center">
				<hr className="border-primary absolute top-1/2 left-0 w-full border-[1.5px]" />
				<h1 className="font-primary text-primary relative bg-white px-6 text-3xl font-bold sm:text-4xl">
					Toners
				</h1>
			</div>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
		</div>
	)
}
