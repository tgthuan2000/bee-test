import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'
import SignInForm from './sign-in-form'

function Auth() {
    const { signed } = useAuth()

    /**
     * @check Signed
     */
    if (signed) {
        return <Navigate to='/' />
    }

    /**
     * @todo sign-in
     */
    return <SignInForm />
}

export default Auth
