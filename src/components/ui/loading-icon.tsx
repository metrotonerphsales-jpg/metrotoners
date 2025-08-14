import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const loadingIconVariants = cva('lds-ring', {
	variants: {
		thickness: {
			default: '[&>div]:border-4',
			sm: '[&>div]:border-2',
		},
	},
	defaultVariants: {
		thickness: 'default',
	},
})

export function LoadingIcon({
	className,
	thickness,
	...props
}: React.HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof loadingIconVariants>) {
	return (
		<div
			className={cn(loadingIconVariants({ thickness }), className)}
			{...props}
		>
			<div />
			<div />
			<div />
			<div />
		</div>
	)
}
