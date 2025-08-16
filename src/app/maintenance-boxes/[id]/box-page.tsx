'use client'

import { ProductLayout } from '@/components/layouts/product-layout'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Image from 'next/image'
import Link from 'next/link'
import client from '@/../tina/__generated__/client'
import { useTina } from 'tinacms/dist/react'
import { Button } from '@/components/ui/button'

type MaintenanceBoxPageProps = {
	box: Awaited<ReturnType<typeof client.queries.MaintenanceBox>>
}

export function BoxPage({ box }: MaintenanceBoxPageProps) {
	const {
		data: { MaintenanceBox },
	} = useTina(box)

	return (
		<ProductLayout
			title={MaintenanceBox.name}
			subtitle={MaintenanceBox.make}
			price={MaintenanceBox.price}
			preview={
				<Image
					className="block rounded object-cover shadow-xl"
					src={MaintenanceBox.images[0].src}
					alt={MaintenanceBox.images[0].alt ?? ''}
					width={600}
					height={600}
				/>
			}
		>
			<TinaMarkdown content={MaintenanceBox.description} />
			<Link
				href={
					MaintenanceBox.url ?? `/contact-us?subject=${MaintenanceBox.name}`
				}
			>
				<Button className="mt-8 w-full text-lg">
					{MaintenanceBox.url ? 'Buy now' : 'Inquire Now'}
				</Button>
			</Link>
		</ProductLayout>
	)
}
