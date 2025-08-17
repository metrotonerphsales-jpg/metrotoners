import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatPrice(p: number) {
	return p.toLocaleString('en-US', { style: 'currency', currency: 'PHP' })
}

export function filterFalsy<T>(item?: T | null): item is T {
	return !!item
}

export function createFilterValues(
	attributes: string[],
	products: Array<Record<string, any>>
) {
	return attributes.reduce((filterValues, attribute) => {
		const uniqueValues = products.reduce((prev, item) => {
			if (item[attribute]) prev.add(item[attribute])
			return prev
		}, new Set()) as Set<string>

		if (uniqueValues.size) {
			filterValues[attribute] = uniqueValues
		}

		return filterValues
	}, {} as FilterValues)
}

export function createCustomFilter(selection: SelectionValues) {
	return (object: Record<string, any>) => {
		for (const key in selection) {
			if (selection[key]?.size && !selection[key].has(object[key])) {
				return false
			}
		}

		return true
	}
}
