'use client'

import Image from 'next/image'
import { useTina } from 'tinacms/dist/react'
import { HomePageData } from './page'

export function Images({ data }: { data: HomePageData }) {
	const { data: d } = useTina(data)

	return (
		<>
			{d.HomePage.images.map((img, i) => (
				<div
					key={i}
					className="aspect-square w-48 overflow-hidden rounded-full"
				>
					<Image
						src={img.src}
						alt={img.alt ?? ''}
						width={1469}
						height={1232}
						className="h-full w-full object-cover"
					/>
				</div>
			))}
		</>
	)
}
