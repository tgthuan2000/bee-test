import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const progressVars = cva('relative w-full overflow-hidden rounded-full bg-accent', {
    variants: {
        size: {
            default: 'h-4',
            sm: 'h-2',
        },
    },
    defaultVariants: {
        size: 'default',
    },
})

const Progress = forwardRef(({ className, value, size, ...props }, ref) => {
    return (
        <div ref={ref} className={cn(progressVars({ size }), className)} {...props}>
            <span
                className='block h-full w-full flex-1 rounded-full bg-primary transition-all'
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </div>
    )
})

Progress.displayName = 'Progress'

export { Progress }
