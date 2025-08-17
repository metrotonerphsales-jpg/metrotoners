import Image from 'next/image'
import { Button } from '../ui/button'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'

type ProductBlockProps = {
	title: string
	subtitle: string
	price: number
	src: string
	alt: string
	url?: string | null
	siteUrl: string
}

export function ProductBlock({
	title,
	subtitle,
	price,
	src,
	alt,
	url,
	siteUrl,
}: ProductBlockProps) {
	return (
		<div className="text-primary border-primary block border">
			<Link href={siteUrl}>
				<Image width={362} height={305} src={src} alt={alt} />
			</Link>
			<div>
				<p className="font-primary mt-2 text-center text-3xl font-bold">
					{title}
				</p>
				<div className="pb-4">
					<p className="font-secondary -mt-1 text-center">{subtitle}</p>
					<p className="font-secondary mt-2 text-center text-xl">
						{formatPrice(price)}
					</p>
					<div className="mt-4 flex flex-wrap justify-center gap-2">
						<Link href={siteUrl}>
							<Button variant="outline" className="text-lg">
								Learn More
							</Button>
						</Link>
						<Link href={url ?? `/contact-us?subject=${title}`}>
							<Button className="w-full text-lg">
								{url ? 'Buy now' : 'Inquire Now'}
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
