import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Loader from '../components/ui/loader'
import { useAuth } from '../contexts/auth'

function Auth() {
    const { auth } = useAuth()

    /**
     * @check Signed
     */
    if (auth.signed) {
        return <Navigate to='/' />
    }

    /**
     * @todo sign-in
     */
    return (
        <Suspense fallback={<Loader className='m-2' />}>
            <Outlet />
        </Suspense>
    )
}

export default Auth
