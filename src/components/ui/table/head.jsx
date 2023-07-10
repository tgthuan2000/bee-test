import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'

const TableHead = forwardRef((props, ref) => {
    const { className, ...rest } = props

    return (
        <th
            ref={ref}
            className={cn(
                'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
                className
            )}
            {...rest}
        />
    )
})

TableHead.displayName = 'TableHead'

export default TableHead
