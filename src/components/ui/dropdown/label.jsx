import Typography from '../typography'

function DropdownLabel({ children, inset, className }) {
    return (
        <Typography variant='dropdown-label' as='span' className={(inset && 'pl-8', className)}>
            {children}
        </Typography>
    )
}

export default DropdownLabel
