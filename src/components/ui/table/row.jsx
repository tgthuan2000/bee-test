import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'

const TableRow = forwardRef((props, ref) => {
    const { className, ...rest } = props

    return (
        <tr
            ref={ref}
            className={cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', className)}
            {...rest}
        />
    )
})

TableRow.displayName = 'TableRow'

export default TableRow
