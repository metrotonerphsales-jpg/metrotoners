'use client'

import { ProductBlock } from '@/components/product-block'
import { PRODUCT_TYPE_TO_PATH, SearchProductsResults } from './api'
import { motion, AnimatePresence } from 'framer-motion'

type GridProps = {
	products: SearchProductsResults
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
							url={p.url}
							siteUrl={`/${PRODUCT_TYPE_TO_PATH[p.__typename]}/${p._sys.filename}`}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}
