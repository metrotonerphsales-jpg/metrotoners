'use client'

import { Input } from "@/components/ui/input"
import { navItems } from './nav-items'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { HTMLAttributes } from 'react'

export function DesktopNavBar(props: HTMLAttributes<HTMLDivElement>) {
	const pathname = usePathname()

	return (
		<nav {...props}>
			{navItems.map((item) => (
				<Link
					key={item.link}
					href={item.link}
					className={pathname === item.link ? 'active' : ''}
				>
					{item.text}
				</Link>
			))}
			<div className="inline-block relative">
				<Input type="search" name="search" className="pr-6" placeholder="Search all products here" />
				<i className="absolute top-1/2 -translate-y-1/2 right-2 i-[material-symbols--search] text-2xl" />
			</div>
		</nav>
	)
}
