'use client'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { navItems } from './nav-items'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MobileNavBar() {
	const pathname = usePathname()

	return (
		<NavigationMenu.Root className="lg:hidden">
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger
						className="hover:outline-primary-300 hover:bg-primary cursor-default rounded-lg outline-2 outline-transparent transition-colors outline-solid"
						aria-label="menu"
						title="menu"
					>
						<i className="i-[material-symbols--menu-rounded] text-4xl" />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="absolute top-20 left-0 z-5 w-full rounded-b-xl bg-white py-4 shadow-xl">
						<div className="text-primary container grid gap-y-2 text-base">
							{navItems.map(item => (
								<Link
									key={item.text}
									href={item.link}
									passHref
									className="group"
								>
									<NavigationMenu.Link
										active={pathname === item.link}
										className="border-l-2 px-3 py-1 underline-offset-2 group-hover:underline"
									>
										{item.text}
									</NavigationMenu.Link>
								</Link>
							))}
						</div>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
				<NavigationMenu.Indicator className="bg-primary-400" />
			</NavigationMenu.List>

			<NavigationMenu.Viewport />
		</NavigationMenu.Root>
	)
}
