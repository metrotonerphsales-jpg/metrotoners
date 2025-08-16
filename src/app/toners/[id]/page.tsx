import client from '@/../tina/__generated__/client'
import { getToners } from '../page'
import { notFound } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { TonerPage } from './toner-page'

export const dynamicParams = false

export async function generateStaticParams() {
	const toners = await getToners()
	return toners?.map(t => ({ id: t._sys.filename })) ?? []
}

async function getToner({ id }: TonerPageProps['params']) {
	try {
		return await client.queries.Toner({ relativePath: `${id}.md` })
	} catch (error) {
		return undefined
	}
}

type TonerPageProps = {
	params: {
		id: string
	}
}

export async function generateMetadata(
	{ params }: TonerPageProps,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const toner = await getToner(params)

	if (!toner) notFound()

	const prevImages = (await parent).openGraph?.images || []
	const data = toner.data.Toner

	return {
		title: data.name,
		description: data.description,
		openGraph: {
			images: [data.images[0]?.src, ...prevImages],
		},
	} as Metadata
}

export default async function Page({ params }: TonerPageProps) {
	const toner = await getToner(params)

	if (!toner) notFound()

	return <TonerPage toner={toner} />
}
