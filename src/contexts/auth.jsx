import { createContext, useContext, useState } from 'react'
import { LOCAL_STORAGE_BEE_PROFILE } from '../constants'
import { wait } from '../lib/utils'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        try {
            const { signed = false, username = undefined } = JSON.parse(
                localStorage.getItem(LOCAL_STORAGE_BEE_PROFILE) ?? {}
            )

            return {
                signed,
                username,
            }
        } catch (error) {
            return {
                signed: false,
                username: undefined,
            }
        }
    })

    const [loading, setLoading] = useState(false)

    const signIn = async ({ username }) => {
        setLoading(true)

        /**
         * @mock time to sign-in
         */
        await wait(1000)

        setAuth({
            signed: true,
            username,
        })

        /**
         * @mocks save status signed to local-storage
         */
        localStorage.setItem(
            LOCAL_STORAGE_BEE_PROFILE,
            JSON.stringify({
                signed: true,
                username,
            })
        )
        setLoading(false)
    }

    const signOut = async () => {
        setAuth({
            signed: false,
            username: undefined,
        })

        /**
         * @mock time to sign-out
         */
        await wait(1000)

        localStorage.removeItem(LOCAL_STORAGE_BEE_PROFILE)
    }

    const value = {
        auth,
        loading,
        signIn,
        signOut,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    const ctx = useContext(AuthContext)

    if (!ctx) {
        throw new Error('useAuth must be using in AuthProvider')
    }

    return ctx
}

export { AuthProvider, useAuth }
