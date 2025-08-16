'use client'

import { ProductLayout } from '@/components/layouts/product-layout'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Image from 'next/image'
import Link from 'next/link'
import client from '@/../tina/__generated__/client'
import { useTina } from 'tinacms/dist/react'
import { Button } from '@/components/ui/button'

type DrumPageProps = {
	drum: Awaited<ReturnType<typeof client.queries.Drum>>
}

export function DrumPage({ drum }: DrumPageProps) {
	const {
		data: { Drum },
	} = useTina(drum)

	return (
		<ProductLayout
			title={Drum.name}
			subtitle={Drum.make}
			price={Drum.price}
			preview={
				<Image
					className="block rounded object-cover shadow-xl"
					src={Drum.images[0].src}
					alt={Drum.images[0].alt ?? ''}
					width={600}
					height={600}
				/>
			}
		>
			<TinaMarkdown content={Drum.description} />
			<Link href={Drum.url ?? `/contact-us?subject=${Drum.name}`}>
				<Button className="mt-8 w-full text-lg">
					{Drum.url ? 'Buy now' : 'Inquire Now'}
				</Button>
			</Link>
		</ProductLayout>
	)
}
