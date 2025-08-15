import { Suspense } from 'react'
import styles from './contact-us.module.css'
import { ContactForm } from './form'
import client from '@/../tina/__generated__/client'
import { MapsEmbed } from './maps-embed'

export const metadata = {
	title: 'Contact Us',
}

async function getData() {
	try {
		return await client.queries.ContactPage({ relativePath: 'contact-us.md' })
	} catch (err) {
		console.error(err)
	}
}

export type ContactPageData = Awaited<
	ReturnType<typeof client.queries.ContactPage>
>

export default async function ContactPage() {
	const data = await getData()

	if (!data) {
		throw new Error('Server error')
	}

	return (
		<section className={styles.section}>
			<div>
				<Suspense fallback={<FormFallback />}>
					<ContactForm />
				</Suspense>
				<div>
					<MapsEmbed data={data} />
				</div>
			</div>
		</section>
	)
}

function FormFallback() {
	return (
		<div className="[&_*]:bg-secondary-100 h-[36rem] animate-pulse space-y-6 p-8">
			<div className="h-4 w-32 rounded-lg" />
			<div className="h-6 w-full rounded-lg" />
			<div className="h-6 w-full rounded-lg" />
			<div className="h-4 w-32 rounded-lg" />
			<div className="h-6 w-full rounded-lg" />
			<div className="h-6 w-full rounded-lg" />
			<div className="h-4 w-32 rounded-lg" />
			<div className="h-6 w-full rounded-lg" />
			<div className="h-4 w-32 rounded-lg" />
			<div className="h-6 w-full rounded-lg" />
			<div className="h-6 w-full rounded-lg" />
		</div>
	)
}
