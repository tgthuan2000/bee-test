import { cn } from '../../../lib/utils'

function DropdownIcon({ icon: Icon, className }) {
    return <Icon className={cn('h-4 w-4', className)} />
}

export default DropdownIcon
