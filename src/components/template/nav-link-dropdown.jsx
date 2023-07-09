import { AlignRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { NAV_LINKS } from '../../constants'
import { useMd } from '../../hooks/use-media-query'
import Button from '../ui/button'
import { Dropdown, DropdownContent, DropdownGroup, DropdownIcon, DropdownItem, DropdownTrigger } from '../ui/dropdown'

function NavLinkDropdown() {
    const navigate = useNavigate()
    const matches = useMd()

    if (matches) {
        return null
    }

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button size='icon' variant='sm'>
                    <AlignRight className='h-4 w-4' />
                </Button>
            </DropdownTrigger>
            <DropdownContent>
                <DropdownGroup>
                    {NAV_LINKS.map((navLink) => {
                        return (
                            <DropdownItem key={navLink.href} onSelect={() => navigate(navLink.href)}>
                                <DropdownIcon icon={navLink.icon} />
                                {navLink.label}
                            </DropdownItem>
                        )
                    })}
                </DropdownGroup>
            </DropdownContent>
        </Dropdown>
    )
}

export default NavLinkDropdown
