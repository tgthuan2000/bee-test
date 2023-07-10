import { useAuth } from '../../contexts/auth'
import Typography from '../../components/ui/typography'

function Home() {
    const { auth } = useAuth()

    return (
        <div className='container px-3 pt-5'>
            <Typography className='inline-flex items-center gap-x-1' variant='title' as='span'>
                Welcome <Typography variant='mdTitle'>{auth.username},</Typography>
            </Typography>
        </div>
    )
}

export default Home
