import Typography from './typography'
import Button from './button'
import { cn } from '../../lib/utils'

function Avatar({ username = '', className }) {
    const firstLetter = username[0]?.toUpperCase() ?? '?'

    return (
        <Button size='icon' as='span' className={cn('select-none', className)}>
            <Typography variant='avatar' as='span'>
                {firstLetter}
            </Typography>
        </Button>
    )
}

export default Avatar
