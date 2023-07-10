import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'

const Table = forwardRef((props, ref) => {
    const { className, ...rest } = props

    return <table ref={ref} className={cn('w-full text-sm', className)} {...rest} />
})

Table.displayName = 'Table'

export default Table
