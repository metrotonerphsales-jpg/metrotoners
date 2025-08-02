import './globals.css'

import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.png'
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
	manifest: '/manifest.webmanifest',
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
				<header className="font-primary shadow-md relative z-5 bg-primary-950 text-white">
					<div className="container flex justify-between items-center text-secondary-950 h-17">
						<Link href="/" className="flex items-center space-x-2">
							<Image
								src={Logo}
								alt="blue globe-like design drawn with longtitude and latitudes"
								width={60}
							/>
							<span className="text-2xl tracking-widest">Metrotoners</span>
						</Link>
						<DesktopNavBar className="gap-x-7 max-lg:hidden flex h-full desktop" />
						<MobileNavBar />
					</div>
				</header>
				<main>{children}</main>
				<footer className="bg-secondary text-white">
					<div className="container font-primary flex py-10 gap-x-10 gap-y-8 flex-wrap md:gap-x-14 md:justify-center lg:gap-x-30 xl:gap-x-14">
						<div className="text-center self-center">
							{/* <Image
								src={Logo}
								alt="blue globe-like design drawn with longtitude and latitudes"
								width={150}
								className="mx-auto"
							/> */}
							<p className="text-3xl mt-2 font-bold tracking-widest">
								Metrotoners
							</p>
							<p className="text-sm font-light font-secondary">
								Business Machines Services Corp.
							</p>
						</div>
						<nav className="space-y-3 flex flex-col xl:pr-10 xl:border-r-1 font-bold justify-center">
							{navItems.map((item) => (
								<Link key={item.link} href={item.link}>
									{item.text}
								</Link>
							))}
						</nav>
						<div className="font-secondary space-y-4 text-sm">
							<div className="space-y-1/2">
								<div className="flex gap-x-2 justify-between">
									<p className="font-medium text-base">Get in touch:</p>
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
									<i className="text-base mr-1 i-[material-symbols--alternate-email-rounded]" />{' '}
									<a className="underline" href={`mailto:${email}`}>
										{email}
									</a>
								</p>
							</div>
							{addresses.map((a) => (
								<div key={a.name} className="space-y-1/2">
									<p>
										<i className="text-base mr-1 i-[material-symbols--call]" />
										{a.tel}
									</p>
									<p className="font-medium">{a.name}:</p>
									<p>
										<i className="text-base mr-1 i-[material-symbols--location-on-rounded]" />
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
