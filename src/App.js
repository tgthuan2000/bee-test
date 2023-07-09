import { lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/auth'
import Dashboard from './layouts/dashboard'

const Auth = lazy(() => import('./features/auth'))
const Home = lazy(() => import('./features/home'))
const Table = lazy(() => import('./features/table'))
const Profile = lazy(() => import('./features/profile'))
const Image = lazy(() => import('./features/image'))

function App() {
    return (
        <BrowserRouter>
            <AppProviders>
                <Routes>
                    <Route path='/' element={<Dashboard />}>
                        <Route index element={<Home />} />
                        <Route path='table' element={<Table />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='image' element={<Image />} />
                    </Route>
                    <Route path='/auth' element={<Auth />} />
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
