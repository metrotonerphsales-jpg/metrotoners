import { Noto_Serif } from 'next/font/google';

export const notoSerif = Noto_Serif({
	subsets: ['latin'],
	variable: '--font-primary',
	display: 'swap',
	weight: ['400', '700'],
});
