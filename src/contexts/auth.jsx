import { createContext, useContext, useState } from 'react'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        signed: false,
        username: undefined,
    })

    const signIn = ({ username }) => {
        setAuth({
            signed: true,
            username,
        })
    }

    const signOut = () => {
        setAuth({
            signed: false,
            username: undefined,
        })
    }

    const value = {
        auth,
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
