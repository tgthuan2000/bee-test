import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Input = forwardRef((props, ref) => {
    const { control, name, value, onChange, className, ...rest } = props

    return (
        <input
            className={cn(
                'border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-lg border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            ref={ref}
            {...rest}
        />
    )
})

Input.displayName = 'Input'

export default Input
