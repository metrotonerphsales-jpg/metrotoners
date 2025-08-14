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
			{loading ? <LoadingIcon className="h-full" thickness="sm" /> : children}
		</Button>
	)
}
