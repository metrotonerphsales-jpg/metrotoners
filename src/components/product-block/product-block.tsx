import Image from 'next/image'
import { Button } from '../ui/button'
import logo from '@/app/icon.svg'
import { formatPrice } from '@/lib/utils'

type Product = {
	name: string
	make: string
	price: number
}

export function ProductBlock({ name, make, price }: Product) {
	return (
		<div className="text-primary border-primary border">
			<Image src={logo} alt="printer" />
			<div>
				<p className="font-primary mt-2 text-center text-3xl font-bold">
					{name}
				</p>
				<p className="font-secondary text-center">{make}</p>
				<p className="font-secondary mt-2 text-center text-xl">
					{formatPrice(price)}
				</p>
				<div className="mt-4 flex justify-center gap-x-2">
					<Button variant="outline">Learn More</Button>
					<Button>Inquire Now</Button>
				</div>
			</div>
		</div>
	)
}
