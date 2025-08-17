'use client'

import { Input } from '@/components/ui/input'
import { navItems } from './nav-items'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { HTMLAttributes } from 'react'
import Form from 'next/form'

export function DesktopNavBar(props: HTMLAttributes<HTMLDivElement>) {
	const pathname = usePathname()

	return (
		<nav {...props}>
			{navItems.map(item => (
				<Link
					key={item.link}
					href={item.link}
					className={
						pathname === item.link ? 'underline underline-offset-6' : ''
					}
				>
					{item.text}
				</Link>
			))}
			<div className="relative inline-block">
				<Form action="/search">
					<Input
						type="search"
						name="q"
						className="pr-6 backdrop-grayscale-25"
						placeholder="Search all products here"
						results={2}
					/>
					<i className="i-[material-symbols--search] absolute top-1/2 right-2 -translate-y-1/2 text-2xl" />
				</Form>
			</div>
		</nav>
	)
}
