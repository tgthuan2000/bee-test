import { Link } from 'react-router-dom'
import { cn } from '../../../lib/utils'
import { typoVars } from '../../ui/typography'
import NavLinkDropdown from '../nav-link-dropdown'
import ProfileDropdown from '../profile-dropdown'

function HorizontalNavbar({ children }) {
    return (
        <>
            <header className='fixed inset-x-0 top-0 z-50'>
                <nav className='flex h-16 items-center justify-between border-b border-border bg-navbar/30 px-4 backdrop-blur-sm'>
                    <Link to='/' className={cn(typoVars({ variant: 'page' }), 'hover:opacity-50')}>
                        Dashboard
                    </Link>
                    <div className='flex items-center space-x-2'>
                        <NavLinkDropdown />
                        <ProfileDropdown />
                    </div>
                </nav>
            </header>
            <div className='mt-16'>{children}</div>
        </>
    )
}

export default HorizontalNavbar
