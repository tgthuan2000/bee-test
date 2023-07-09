import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../../constants'
import { cn } from '../../lib/utils'
import { btnVars } from '../ui/button'

function NavLinkList() {
    return (
        <ul className='flex flex-col space-y-2'>
            {NAV_LINKS.map((navLink) => {
                return (
                    <li key={navLink.href}>
                        <NavLinkItem label={navLink.label} href={navLink.href} icon={navLink.icon} />
                    </li>
                )
            })}
        </ul>
    )
}

export default NavLinkList

const NavLinkItem = ({ href, label, icon: Icon }) => {
    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                cn(
                    btnVars({ variant: 'ghost' }),
                    isActive ? 'bg-muted hover:bg-muted' : 'hover:bg-transparent hover:underline',
                    'flex justify-start gap-x-2'
                )
            }
        >
            <Icon className='h-4 w-4' />
            {label}
        </NavLink>
    )
}
