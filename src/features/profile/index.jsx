import moment from 'moment'
import Avatar from '../../components/ui/avatar'
import Image from '../../components/ui/image'
import Typography from '../../components/ui/typography'
import { useAuth } from '../../contexts/auth'

function Profile() {
    const { auth } = useAuth()
    return (
        <>
            {/* Background */}
            <Image variant='profile' className='max-h-[40vh] bg-accent' src='https://picsum.photos/2400/1000' />
            {/* Avatar & information */}
            <div className='container -mt-10'>
                <div className='flex flex-col items-center gap-4 md:flex-row'>
                    <Avatar
                        username={auth.username}
                        className='h-32 w-32 shrink-0 border-4 border-background shadow-2xl md:h-40 md:w-40 [&_span]:text-5xl md:[&_span]:text-7xl'
                    />

                    <Typography variant='page'>{auth.username}</Typography>
                </div>
            </div>
            <div className='mx-auto mt-5 max-w-lg'>
                <div className='mx-3 space-y-2 rounded-lg border p-5'>
                    <div className='flex items-center justify-between gap-x-2'>
                        <Typography variant='title'>Last access</Typography>
                        <Typography variant='description'>
                            {moment.unix(auth.lastAccess).format('DD/MM/YYYY - HH:mm')}
                        </Typography>
                    </div>
                    <div className='flex items-center justify-between gap-x-2'>
                        <Typography variant='title'>Online time</Typography>
                        <Typography variant='description'>{moment.unix(auth.lastAccess).toNow()}</Typography>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
