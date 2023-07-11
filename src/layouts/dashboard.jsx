import { Suspense, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import HorizontalNavbar from '../components/template/navbar/horizontal'
import VerticalNavbar from '../components/template/navbar/vertical'
import Loader from '../components/ui/loader'
import { useAuth } from '../contexts/auth'

function Dashboard() {
    const { auth, updateAccess } = useAuth()

    useEffect(() => {
        updateAccess()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /**
     * @check Signed
     */
    if (!auth.signed) {
        return <Navigate to='/auth' />
    }

    return (
        <HorizontalNavbar>
            <VerticalNavbar>
                <Suspense
                    fallback={
                        <div className='container px-3 pt-5'>
                            <Loader />
                        </div>
                    }
                >
                    <Outlet />
                </Suspense>
            </VerticalNavbar>
        </HorizontalNavbar>
    )
}

export default Dashboard
