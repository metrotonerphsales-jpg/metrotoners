import client from '@/../tina/__generated__/client'
import { getDrums } from '../page'
import { notFound } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { DrumPage } from './drum-page'

export const dynamicParams = false

export async function generateStaticParams() {
	const drums = await getDrums()
	return drums?.map(d => ({ id: d._sys.filename })) ?? []
}

async function getDrum({ id }: Awaited<DrumPageProps['params']>) {
	return await client.queries.Drum({ relativePath: `${id}.md` })
}

type DrumPageProps = {
	params: Promise<{ id: string }>
}

export async function generateMetadata(
	{ params }: DrumPageProps,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const drum = await getDrum(await params)

	if (!drum) notFound()

	const prevImages = (await parent).openGraph?.images || []
	const data = drum.data.Drum

	return {
		title: data.name,
		description: data.description,
		openGraph: {
			images: [data.images[0]?.src, ...prevImages],
		},
	} as Metadata
}

export default async function Page({ params }: DrumPageProps) {
	const drum = await getDrum(await params)

	if (!drum) notFound()

	return <DrumPage drum={drum} />
}
