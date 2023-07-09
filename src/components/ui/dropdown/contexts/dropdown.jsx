import { createContext, useContext, useState } from 'react'
import { useClickOutside } from '../../../../hooks/use-click-outside'

const defaultValue = {
    isShow: false,
    open: () => {},
    close: () => {},
}

const DropdownContext = createContext(defaultValue)

function DropdownProvider({ children, defaultOpen = false }) {
    const [show, setShow] = useState(defaultOpen ?? defaultValue.isShow)
    const clickOutsideRef = useClickOutside(onClose)

    function onOpen() {
        setShow(true)
    }

    function onClose() {
        setShow(false)
    }

    const value = {
        isShow: show,
        open: onOpen,
        close: onClose,
    }

    return (
        <DropdownContext.Provider value={value}>
            <div className='relative' ref={show ? clickOutsideRef : undefined}>
                {children}
            </div>
        </DropdownContext.Provider>
    )
}

export const useDropdown = () => {
    const ctx = useContext(DropdownContext)

    if (!ctx) {
        throw new Error('useDropdown must be using in DropdownProvider')
    }

    return ctx
}

export default DropdownProvider
