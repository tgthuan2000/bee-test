import { useAuth } from '../../contexts/auth'
import Typography from '../../components/ui/typography'

function Home() {
    const { auth } = useAuth()

    return (
        <Typography className='inline-flex items-center gap-x-1' variant='title' as='span'>
            Welcome <Typography variant='mdTitle'>{auth.username},</Typography>
        </Typography>
    )
}

export default Home
