import { cn } from '@/lib/utils'
import { Button, ButtonProps } from './button'
import { LoadingIcon } from './loading-icon'

export function LoadingButton({
	loading,
	children,
	loaderClassName,
	...props
}: ButtonProps & { loading: boolean; loaderClassName?: string }) {
	return (
		<Button {...props} disabled={loading}>
			{loading ? (
				<LoadingIcon className={cn('h-full', loaderClassName)} thickness="sm" />
			) : (
				children
			)}
		</Button>
	)
}
