import NavLinkGroup from '../nav-link-list'

function VerticalNavbar({ children }) {
    return (
        <>
            <nav className='fixed z-50 h-[calc(100vh-64px)] w-80 border-r border-border px-2 py-5'>
                <NavLinkGroup />
            </nav>
            <div className='ml-80 p-5'>{children}</div>
        </>
    )
}

export default VerticalNavbar
