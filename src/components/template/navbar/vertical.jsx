import { useMd } from '../../../hooks/use-media-query'
import NavLinkGroup from '../nav-link-list'

function VerticalNavbar({ children }) {
    const matches = useMd()

    return (
        <>
            {matches && (
                <nav className='fixed z-50 h-[calc(100vh-64px)] w-72 border-r border-border px-2 py-5'>
                    <NavLinkGroup />
                </nav>
            )}
            <div className='p-3 md:ml-72 md:p-5'>{children}</div>
        </>
    )
}

export default VerticalNavbar
