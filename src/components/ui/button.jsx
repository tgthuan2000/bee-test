import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'
import Loader from './loader'

export const btnVars = cva(
    'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground hover:bg-primary/90',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                outline: 'border border-text hover:bg-accent hover:text-accent-foreground',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'underline-offset-2 hover:underline text-primary',
                danger: 'bg-danger text-danger-foreground hover:bg-danger/90',
                success: 'bg-success text-success-foreground hover:bg-success/90',
                info: 'bg-info text-info-foreground hover:bg-info/90',
                'danger-foreground': 'text-danger bg-transparent hover:text-danger/90',
                'success-foreground': 'text-success bg-transparent hover:text-success/90',
                'info-foreground': 'text-info bg-transparent hover:text-info/90',
            },
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-3',
                lg: 'h-11 px-8',
                icon: 'h-10 w-10 rounded-full',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

const Button = forwardRef((props, ref) => {
    const { className, variant, size, children, loading, ...rest } = props

    return (
        <button className={cn(btnVars({ variant, size, className }))} ref={ref} {...rest}>
            {loading && <Loader className='mr-2' />}
            {children}
        </button>
    )
})

Button.displayName = 'Button'

export default Button
