import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'

const TableBody = forwardRef((props, ref) => {
    const { className, ...rest } = props

    return <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...rest} />
})

TableBody.displayName = 'TableBody'

export default TableBody
