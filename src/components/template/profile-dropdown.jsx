import Avatar from '../ui/avatar'
import { useAuth } from '../../contexts/auth'
import { Dropdown, DropdownContent, DropdownGroup, DropdownIcon, DropdownItem, DropdownTrigger } from '../ui/dropdown'
import { useNavigate } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'

function ProfileDropdown() {
    const { auth, signOut } = useAuth()
    const navigate = useNavigate()

    return (
        <Dropdown>
            <DropdownTrigger>
                <Avatar username={auth.username} />
            </DropdownTrigger>
            <DropdownContent>
                <DropdownGroup>
                    <DropdownItem onSelect={() => navigate('/profile')}>
                        <DropdownIcon icon={User} />
                        Profile
                    </DropdownItem>
                    <DropdownItem onSelect={signOut}>
                        <DropdownIcon icon={LogOut} />
                        Sign out
                    </DropdownItem>
                </DropdownGroup>
            </DropdownContent>
        </Dropdown>
    )
}

export default ProfileDropdown
