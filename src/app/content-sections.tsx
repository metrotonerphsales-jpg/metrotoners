'use client'

import { useTina } from 'tinacms/dist/react'
import { HomePageData } from './page'
import Image from 'next/image'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Fragment } from 'react'
import styles from './home.module.css'

export function ContentSection({ data }: { data: HomePageData }) {
	const { data: d } = useTina(data)
	return (
		<>
			{d.HomePage.contentSections.map((sec, i) =>
				i % 2 ? (
					<Fragment key={i}>
						<Image
							src={sec.image.src}
							alt={sec.image.alt ?? ''}
							width={2711}
							height={2711}
							className={styles.image}
						/>
						<div className={styles.content}>
							<TinaMarkdown content={sec.body} />
						</div>
					</Fragment>
				) : (
					<Fragment key={i}>
						<div className={styles.content}>
							<TinaMarkdown content={sec.body} />
						</div>
						<Image
							src={sec.image.src}
							alt={sec.image.alt ?? ''}
							width={600}
							height={600}
							className={styles.image}
						/>
					</Fragment>
				)
			)}
		</>
	)
}
