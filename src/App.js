import { lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/auth'
import Auth from './layouts/auth'
import Dashboard from './layouts/dashboard'
import { wait } from './lib/utils'
import { PAGE_LOAD_MS } from './constants'

/**
 * @todo lazy loading features
 * @mock load js
 */
const SignIn = lazy(() => wait(PAGE_LOAD_MS).then(() => import('./features/sign-in')))
const Home = lazy(() => import('./features/home'))
const TrendingMovie = lazy(() => wait(PAGE_LOAD_MS).then(() => import('./features/trending-movie')))
const Profile = lazy(() => wait(PAGE_LOAD_MS).then(() => import('./features/profile')))
const Image = lazy(() => wait(PAGE_LOAD_MS).then(() => import('./features/image')))

function App() {
    return (
        <BrowserRouter>
            <AppProviders>
                <Routes>
                    <Route path='/' element={<Dashboard />}>
                        <Route index element={<Home />} />
                        <Route path='trending-movie' element={<TrendingMovie />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='image' element={<Image />} />
                    </Route>
                    <Route path='/auth' element={<Auth />}>
                        <Route index element={<SignIn />} />
                    </Route>
                    <Route path='/*' element={<Navigate to='/' />} />
                </Routes>
            </AppProviders>
        </BrowserRouter>
    )
}

const AppProviders = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>
}

export default App
