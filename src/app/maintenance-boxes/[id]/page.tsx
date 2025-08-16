import client from '@/../tina/__generated__/client'
import { getBoxes } from '../api'
import { notFound } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { BoxPage } from './box-page'

export const dynamicParams = false

export async function generateStaticParams() {
	const boxes = await getBoxes()
	return boxes?.map(b => ({ id: b._sys.filename })) ?? []
}

async function getBox({ id }: Awaited<MaintenanceBoxPageProps['params']>) {
	return await client.queries.MaintenanceBox({ relativePath: `${id}.md` })
}

type MaintenanceBoxPageProps = {
	params: Promise<{ id: string }>
}

export async function generateMetadata(
	{ params }: MaintenanceBoxPageProps,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const box = await getBox(await params)

	if (!box) notFound()

	const prevImages = (await parent).openGraph?.images || []
	const data = box.data.MaintenanceBox

	return {
		title: data.name,
		description: data.description,
		openGraph: {
			images: [data.images[0]?.src, ...prevImages],
		},
	} as Metadata
}

export default async function Page({ params }: MaintenanceBoxPageProps) {
	const box = await getBox(await params)

	if (!box) notFound()

	return <BoxPage box={box} />
}
