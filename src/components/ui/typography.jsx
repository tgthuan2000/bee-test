import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export const typoVars = cva('', {
    variants: {
        variant: {
            page: 'text-3xl font-medium tracking-tight',
            text: 'text-sm font-light',
            mdTitle: 'text-base font-medium leading-none',
            title: 'text-sm font-medium leading-none',
            description: 'text-xs text-muted-foreground',
            badge: 'text-xs text-secondary-foreground bg-secondary',
            subTitle: 'text-xs font-light opacity-50',
        },
    },
    defaultVariants: {
        variant: 'page',
    },
})

function Typography({ children, as: Comp = 'p', className, variant }) {
    return <Comp className={cn(typoVars({ variant }), className)}>{children}</Comp>
}

export default Typography
