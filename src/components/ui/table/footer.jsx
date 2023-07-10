import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'

const TableFooter = forwardRef((props, ref) => {
    const { className, ...rest } = props

    return <tfoot ref={ref} className={cn('bg-primary font-medium text-primary-foreground', className)} {...rest} />
})

TableFooter.displayName = 'TableFooter'

export default TableFooter
