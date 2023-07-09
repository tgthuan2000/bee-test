import { useEffect, useState } from 'react'
import { useDropdown } from './contexts/dropdown'

function DropdownPortal({ children }) {
    const { isShow } = useDropdown()
    const [debounceShow, setDebounceShow] = useState(isShow)

    useEffect(() => {
        let timeout = null
        const ms = isShow ? 0 : 100 // <= 100

        timeout = setTimeout(() => {
            setDebounceShow(isShow)
        }, ms)

        return () => {
            timeout && clearTimeout(timeout)
        }
    }, [isShow])

    if (!debounceShow) {
        return null
    }

    return (
        <div className='absolute right-0 top-full'>
            {children({
                state: isShow ? 'open' : 'closed',
                side: 'top',
            })}
        </div>
    )
}

export default DropdownPortal
