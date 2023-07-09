import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Label = forwardRef((props, ref) => {
    const { className, ...rest } = props

    return (
        <label
            ref={ref}
            className={cn(
                'text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                className
            )}
            {...rest}
        />
    )
})

Label.displayName = 'Label'

export default Label
