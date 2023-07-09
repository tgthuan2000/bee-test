import Typography from './typography'
import Button from './button'

function Avatar({ username = '' }) {
    const firstLetter = username[0].toUpperCase() ?? '?'

    return (
        <Button size='icon' as='span' className='select-none'>
            <Typography variant='avatar' as='span'>
                {firstLetter}
            </Typography>
        </Button>
    )
}

export default Avatar
