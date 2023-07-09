import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import HorizontalNavbar from '../components/template/navbar/horizontal'
import VerticalNavbar from '../components/template/navbar/vertical'
import Loader from '../components/ui/loader'
import { useAuth } from '../contexts/auth'

function Dashboard() {
    const { auth } = useAuth()

    /**
     * @check Signed
     */
    if (!auth.signed) {
        return <Navigate to='/auth' />
    }

    return (
        <>
            <HorizontalNavbar>
                <VerticalNavbar>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </VerticalNavbar>
            </HorizontalNavbar>
        </>
    )
}

export default Dashboard
