import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'

const DropdownSeparator = forwardRef((props, ref) => {
    const { className, ...rest } = props

    return <span ref={ref} className={cn('-mx-1 my-1 block h-px bg-muted', className)} {...rest} />
})

DropdownSeparator.displayName = 'DropdownSeparator'

export default DropdownSeparator
