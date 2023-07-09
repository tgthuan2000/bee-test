import Avatar from '../ui/avatar'
import { useAuth } from '../../contexts/auth'

function ProfileDropdown() {
    const { auth } = useAuth()

    return (
        <>
            <Avatar username={auth.username} />
        </>
    )
}

export default ProfileDropdown
