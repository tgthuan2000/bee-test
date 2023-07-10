import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'

const TableHeader = forwardRef((props, ref) => {
    const { className, ...rest } = props

    return <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...rest} />
})

TableHeader.displayName = 'TableHeader'

export default TableHeader
