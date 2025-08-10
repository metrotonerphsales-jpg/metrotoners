import './globals.css'

import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './icon.svg'
import { ptSerif, notoSerif, outfit } from '@/fonts'
import { DesktopNavBar } from './desktop-nav-bar'
import { MobileNavBar } from './mobile-nav-bar'
import { navItems } from './nav-items'
import { getGlobalData } from './api'

export const metadata: Metadata = {
	title: {
		template: '%s | Metrotoners',
		default: 'Metrotoners',
	},
	generator: 'Next.js',
	description:
		'Licensed service center of Brother Philippines. Discover top-quality Brother printers and genuine toner cartridges for exceptional printing results. Shop now for reliable printing solutions and unbeatable deals!',
	keywords: ['toner', 'ink', 'drum', 'maintenance box'],
	applicationName: 'Metrotoners',
	category: 'stationery',
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#2eaafa' },
		{ media: '(prefers-color-scheme: dark)', color: '#001a33' },
	],
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { email, addresses, facebook_url, shopee_url } = await getGlobalData()

	return (
		<html
			lang="en"
			className={`${ptSerif.variable} ${notoSerif.variable} ${outfit.variable}`}
		>
			<body className="font-tertiary">
				<header className="font-primary bg-primary relative z-5 text-white shadow-md">
					<div className="text-secondary-950 container flex flex-col items-center">
						<Link href="/">
							<Image
								src={Logo}
								alt="Logo with big MT letters and a small text in between Metrotoners"
								width={160}
							/>
						</Link>
						<DesktopNavBar className="mb-2 flex gap-x-10 text-xl whitespace-nowrap max-lg:hidden" />
						<MobileNavBar />
					</div>
				</header>
				<main>{children}</main>
				<footer className="bg-secondary text-white">
					<div className="font-primary container flex flex-wrap gap-x-10 gap-y-8 py-10 md:justify-center md:gap-x-14 lg:gap-x-30 xl:gap-x-14">
						<div className="self-center text-center">
							{/* <Image
								src={Logo}
								alt="blue globe-like design drawn with longtitude and latitudes"
								width={150}
								className="mx-auto"
							/> */}
							<p className="mt-2 text-3xl font-bold tracking-widest">
								Metrotoners
							</p>
							<p className="font-secondary text-sm font-light">
								Business Machines Services Corp.
							</p>
						</div>
						<nav className="flex flex-col justify-center space-y-3 font-bold xl:border-r-1 xl:pr-10">
							{navItems.map(item => (
								<Link key={item.link} href={item.link}>
									{item.text}
								</Link>
							))}
						</nav>
						<div className="font-secondary space-y-4 text-sm">
							<div className="space-y-1/2">
								<div className="flex justify-between gap-x-2">
									<p className="text-base font-medium">Get in touch:</p>
									<div className="gap-x-2 pt-1">
										<a href={facebook_url} className="footer-icon">
											<i className="i-[arcticons--facebook]" />
										</a>
										<a href={shopee_url} className="footer-icon">
											<i className="i-[arcticons--shopee] bg-white" />
										</a>
									</div>
								</div>
								<hr />
								<p>
									<i className="i-[material-symbols--alternate-email-rounded] mr-1 text-base" />{' '}
									<a className="underline" href={`mailto:${email}`}>
										{email}
									</a>
								</p>
							</div>
							{addresses.map(a => (
								<div key={a.name} className="space-y-1/2">
									<p>
										<i className="i-[material-symbols--call] mr-1 text-base" />
										{a.tel}
									</p>
									<p className="font-medium">{a.name}:</p>
									<p>
										<i className="i-[material-symbols--location-on-rounded] mr-1 text-base" />
										{a.address}
									</p>
								</div>
							))}
						</div>
					</div>
				</footer>
			</body>
		</html>
	)
}
