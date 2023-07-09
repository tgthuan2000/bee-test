import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'
import SignInForm from './sign-in-form'

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
    return <SignInForm />
}

export default Auth
