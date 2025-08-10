import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatPrice(p: number) {
	return p.toLocaleString('en-US', { style: 'currency', currency: 'PHP' })
}
