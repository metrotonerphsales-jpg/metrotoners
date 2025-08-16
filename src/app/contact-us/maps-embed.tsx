'use client'

import { tinaField, useTina } from 'tinacms/dist/react'
import { ContactPageData } from './page'

export function MapsEmbed({ data }: { data: ContactPageData }) {
	const {
		data: { ContactPage },
	} = useTina(data)

	return (
		<iframe
			data-tina-field={tinaField(ContactPage, 'maps_url')}
			title="our google maps location"
			className="h-full w-full"
			allowFullScreen={false}
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
			src={ContactPage.maps_url}
		/>
	)
}
