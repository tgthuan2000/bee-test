import { forwardRef, useState } from 'react'
import { cn } from '../../../lib/utils'
import { useDropdown } from './contexts/dropdown'
import Loader from '../loader'

const DropdownItem = forwardRef((props, ref) => {
    const { className, inset, onSelect, children, ...rest } = props
    const { close } = useDropdown()
    const [loading, setLoading] = useState(false)

    const handleSelect = async () => {
        setLoading(true)
        await onSelect()
        setLoading(false)
        close()
    }

    return (
        <li ref={ref} className={cn('relative text-sm', inset && 'pl-8', className)} {...rest}>
            <button
                disabled={loading}
                onClick={handleSelect}
                className='flex w-full select-none items-center gap-x-2 whitespace-nowrap rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50'
            >
                {loading ? <Loader className='w-full text-center' /> : children}
            </button>
        </li>
    )
})

DropdownItem.displayName = 'DropdownItem'

export default DropdownItem
