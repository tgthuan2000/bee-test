import Typography from './typography'
import Button from './button'

function Avatar({ username = '' }) {
    const firstLetter = username[0].toUpperCase() ?? '?'
    return (
        <Button size='icon'>
            <Typography variant='avatar'>{firstLetter}</Typography>
        </Button>
    )
}

export default Avatar
