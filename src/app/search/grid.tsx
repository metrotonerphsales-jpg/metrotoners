'use client'

import { ProductBlock } from '@/components/product-block'
import { searchProducts } from './api'
import { motion, AnimatePresence } from 'framer-motion'

type GridProps = {
	products: NonNullable<Awaited<ReturnType<typeof searchProducts>>>
}

type ProductTypes = GridProps['products'][0]['__typename']

const paths: Record<ProductTypes, string> = {
	Toner: 'toners',
	Drum: 'drums',
	MaintenanceBox: 'maintenance-boxes',
}

export function Grid({ products }: GridProps) {
	return (
		<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<AnimatePresence mode="sync">
				{products.map(p => (
					<motion.div
						key={p.name}
						layout
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.3 }}
					>
						<ProductBlock
							title={p.name}
							subtitle={p.make}
							price={p.price}
							src={p.images[0].src}
							alt={p.images[0].alt ?? ''}
							url={`/${paths[p.__typename]}/${p._sys.filename}`}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}
