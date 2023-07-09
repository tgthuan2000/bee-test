import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import DropdownPortal from './protal'

const DropdownContent = forwardRef((props, ref) => {
    const { className, ...rest } = props

    return (
        <DropdownPortal>
            {({ state, side }) => (
                <div
                    ref={ref}
                    className={cn(
                        'z-50 min-w-[8rem] overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                        className
                    )}
                    data-state={state}
                    data-side={side}
                    {...rest}
                />
            )}
        </DropdownPortal>
    )
})

DropdownContent.displayName = 'DropdownContent'

export default DropdownContent
