'use client'

import { Filter } from '@/components/filter/filter'
import { ProductBlock } from '@/components/product-block'
import { useState } from 'react'
import { getDrums } from './api'
import { createCustomFilter } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

type GridProps = {
	filters: FilterValues
	drums: NonNullable<Awaited<ReturnType<typeof getDrums>>>
}

export function Grid({ filters, drums }: GridProps) {
	const [selection, setSelection] = useState<SelectionValues>({})

	const filtered = drums.filter(createCustomFilter(selection))

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
					{filtered.map(drum => (
						<motion.div
							key={drum.name}
							layout
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.3 }}
						>
							<ProductBlock
								title={drum.name}
								subtitle={drum.make}
								price={drum.price}
								src={drum.images[0].src}
								alt={drum.images[0].alt ?? ''}
								url={`/drums/${drum._sys.filename}`}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</>
	)
}
