import { useDropdown } from './contexts/dropdown'

function DropdownTrigger({ children }) {
    const { isShow, open, close } = useDropdown()

    return <div onClick={isShow ? close : open}>{children}</div>
}

export default DropdownTrigger
