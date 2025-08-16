'use client'

import { ProductLayout } from '@/components/layouts/product-layout'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Image from 'next/image'
import Link from 'next/link'
import client from '@/../tina/__generated__/client'
import { useTina } from 'tinacms/dist/react'
import { Button } from '@/components/ui/button'

type TonerPageProps = {
	toner: Awaited<ReturnType<typeof client.queries.Toner>>
}

export function TonerPage({ toner }: TonerPageProps) {
	const {
		data: { Toner },
	} = useTina(toner)

	return (
		<ProductLayout
			title={Toner.name}
			subtitle={Toner.make}
			price={Toner.price}
			preview={
				<Image
					className="block rounded object-cover shadow-xl"
					src={Toner.images[0].src}
					alt={Toner.images[0].alt ?? ''}
					width={600}
					height={600}
				/>
			}
		>
			<TinaMarkdown content={Toner.description} />
			<Link href={Toner.url ?? `/contact-us?subject=${Toner.name}`}>
				<Button className="mt-8 w-full text-lg">
					{Toner.url ? 'Buy now' : 'Inquire Now'}
				</Button>
			</Link>
		</ProductLayout>
	)
}
