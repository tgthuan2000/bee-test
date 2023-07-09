import { cn } from '../../../lib/utils'

function DropdownGroup({ className, ...rest }) {
    return <ul className={cn('', className)} {...rest} />
}

export default DropdownGroup
