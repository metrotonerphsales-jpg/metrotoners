'use client'

import { Filter } from '@/components/filter/filter'
import { ProductBlock } from '@/components/product-block'
import { useState } from 'react'
import { getToners } from './api'
import { createCustomFilter } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

type GridProps = {
	filters: FilterValues
	toners: NonNullable<Awaited<ReturnType<typeof getToners>>>
}

export function Grid({ filters, toners }: GridProps) {
	const [selection, setSelection] = useState<SelectionValues>({})

	const filtered = toners.filter(createCustomFilter(selection))

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
					{filtered.map(toner => (
						<motion.div
							key={toner.name}
							layout
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.3 }}
						>
							<ProductBlock
								title={toner.name}
								subtitle={toner.make}
								price={toner.price}
								src={toner.images[0].src}
								alt={toner.images[0].alt ?? ''}
								url={`/toners/${toner._sys.filename}`}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</>
	)
}
