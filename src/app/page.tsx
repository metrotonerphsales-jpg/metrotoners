import { ProductBlock } from "@/components/product-block";

export default function Home() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="relative flex justify-center">
				<hr className="border-primary border-[1.5px] absolute top-1/2 left-0 w-full" />
				<h1 className="text-4xl font-bold font-primary bg-white relative px-6">Toners</h1>
			</div>
			<div className="grid grid-cols-4">
				<ProductBlock name="DR-261CL" make="Brother" price={4900}></ProductBlock>
			</div>
		</div>
	)
}
