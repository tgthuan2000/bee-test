import moment from 'moment'
import Avatar from '../../components/ui/avatar'
import Typography from '../../components/ui/typography'
import { useAuth } from '../../contexts/auth'

function Profile() {
    const { auth } = useAuth()
    return (
        <div className='flex flex-col items-center'>
            <div className='aspect-video max-h-[35vh] w-full bg-accent' />
            <div className='-mt-16 md:-mt-20'>
                <Avatar
                    username={auth.username}
                    className='h-32 w-32 md:h-40 md:w-40 [&_span]:text-5xl md:[&_span]:text-7xl'
                />
            </div>
            <div className='container mt-5'>
                <div className='flex flex-col gap-2 rounded-lg border p-5'>
                    <div className='inline-flex items-center gap-x-2'>
                        <Typography variant='description'>Username:</Typography>{' '}
                        <Typography variant='mdTitle'>{auth.username}</Typography>
                    </div>
                    <div className='inline-flex items-center gap-x-2'>
                        <Typography variant='description'>Last access:</Typography>{' '}
                        <Typography variant='mdTitle'>{moment().format('DD/MM/YYYY  - HH:mm')}</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
