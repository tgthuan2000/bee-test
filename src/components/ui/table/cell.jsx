import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'

const TableCell = forwardRef((props, ref) => {
    const { className, ...rest } = props

    return <td ref={ref} className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)} {...rest} />
})

TableCell.displayName = 'TableCell'

export default TableCell
