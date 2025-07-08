import { PT_Serif } from 'next/font/google'

export const ptSerif = PT_Serif({
	subsets: ['latin'],
	variable: '--font-secondary',
	display: 'swap',
	weight: ['400', '700'],
})
