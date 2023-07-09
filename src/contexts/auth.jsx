import { createContext, useContext, useState } from 'react'
import { LOCAL_STORAGE_BEE_PROFILE } from '../constants'
import { wait } from '../lib/utils'

const defaultValue = {
    auth: {
        signed: false,
        username: undefined,
    },
    loading: false,
    signIn: async () => {},
    signOut: async () => {},
}

const AuthContext = createContext(defaultValue)

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(defaultValue.loading)
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
            return defaultValue.auth
        }
    })

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
        setLoading(true)

        /**
         * @mock time to sign-out
         */
        await wait(2000)

        setAuth({
            signed: false,
            username: undefined,
        })

        localStorage.removeItem(LOCAL_STORAGE_BEE_PROFILE)
        setLoading(false)
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
