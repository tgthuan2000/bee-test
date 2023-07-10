import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { useState } from 'react'
import { HelpCircle } from 'lucide-react'

export const imageVars = cva('bg-accent', {
    variants: {
        variant: {
            profile: 'aspect-video w-full',
            table: 'h-14 w-14 rounded-lg object-cover shrink-0',
        },
    },
})

function Image({ className, alt = '', variant, ...props }) {
    const [error, setError] = useState(false)

    if (error) {
        return (
            <span className={cn(imageVars({ variant }), 'inline-flex items-center justify-center', className)}>
                <HelpCircle className='h-8 w-8 text-muted-foreground' />
            </span>
        )
    }

    return <img alt={alt} className={cn(imageVars({ variant }), className)} onError={() => setError(true)} {...props} />
}

export default Image
