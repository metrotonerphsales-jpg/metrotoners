'use client'

import { FilterValues, SelectionValues } from '@/types'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

type FilterProps = {
	filters: FilterValues
	selection: SelectionValues
	setSelection: Dispatch<SetStateAction<SelectionValues>>
}

/**
 * Filter component
 * @param filters object format should look something like this `{ make: Set('Brother', 'HP'), type: Set('Monochromatic, Multicolor')` }
 * @returns
 */
export function Filter({ filters, selection, setSelection }: FilterProps) {
	function handleChange(
		e: ChangeEvent<HTMLInputElement>,
		key: string,
		value: string
	) {
		const set = selection[key] ?? new Set()

		if (e.target.checked) {
			set.add(value)
		} else {
			set.delete(value)
		}

		setSelection({ ...selection, [key]: set })
	}

	return (
		<div className="text-primary sticky top-4">
			<p className="font-primary border-primary border p-2 text-xl">
				Filter by:
			</p>
			<div className="border-primary space-y-2 border border-t-0 px-4 py-2">
				{Object.keys(filters).map(key => (
					<div key={key}>
						<p className="font-primary text-lg capitalize">{key}</p>
						{[...filters[key]].map(value => (
							<label className="block" key={value}>
								<input
									type="checkbox"
									className="mr-1"
									checked={!!selection[key]?.has(value)}
									onChange={e => handleChange(e, key, value)}
									value={value}
								/>
								{value}
							</label>
						))}
					</div>
				))}
			</div>
		</div>
	)
}
