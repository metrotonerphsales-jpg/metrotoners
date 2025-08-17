'use client'

import { Filter } from '@/components/filter/filter'
import { ProductBlock } from '@/components/product-block'
import { useState } from 'react'
import { getBoxes } from './api'
import { createCustomFilter } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { FilterValues, SelectionValues } from '@/types'
import { PRODUCT_TYPE_TO_PATH } from '../search/api'

type GridProps = {
	filters: FilterValues
	boxes: NonNullable<Awaited<ReturnType<typeof getBoxes>>>
}

export function Grid({ filters, boxes }: GridProps) {
	const [selection, setSelection] = useState<SelectionValues>({})

	const filtered = boxes.filter(createCustomFilter(selection))

	return (
		<>
			<aside>
				<Filter
					filters={filters}
					selection={selection}
					setSelection={setSelection}
				/>
			</aside>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				<AnimatePresence mode="sync">
					{filtered.map(box => (
						<motion.div
							key={box.name}
							layout
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.3 }}
						>
							<ProductBlock
								title={box.name}
								subtitle={box.make}
								price={box.price}
								src={box.images[0].src}
								alt={box.images[0].alt ?? ''}
								url={box.url}
								siteUrl={`/${PRODUCT_TYPE_TO_PATH[box.__typename]}/${box._sys.filename}`}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</>
	)
}
