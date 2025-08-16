import { formatPrice } from '@/lib/utils'
import styles from './product-layout.module.css'
import Link from 'next/link'

type ProductLayoutProps = {
	title: string
	subtitle: string
	price: number
	preview: React.ReactNode
	children: React.ReactNode
}

export function ProductLayout({
	title,
	subtitle,
	price,
	preview,
	children,
}: ProductLayoutProps) {
	return (
		<>
			<div className="container mt-8 max-w-screen-xl">
				<Link
					href="."
					className="text-primary hover:text-secondary font-secondary text-xl font-medium transition-colors"
				>
					<i className="i-[material-symbols--arrow-back]" /> Back
				</Link>
			</div>

			<section className="my-8">
				<div className="container grid max-w-screen-xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-10 lg:gap-x-12 xl:gap-x-16">
					<aside className={`${styles.swiper} md:col-span-5 lg:col-span-4`}>
						<div className="mx-auto max-md:max-w-sm">{preview}</div>
					</aside>
					<article className="text-primary place-self-center md:col-span-5 lg:col-span-6">
						<h1 className="head-1">{title}</h1>
						<p className="font-secondary my-2 text-3xl font-medium tracking-wide">
							{subtitle}
						</p>
						<p className="font-secondary text-2xl font-medium">
							{formatPrice(price)}
						</p>
						<div className={styles['description']}>{children}</div>
					</article>
				</div>
			</section>
		</>
	)
}
