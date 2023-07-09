import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { cn } from '~/lib/utils'
import Typography from '../typography'

const FormMessage = forwardRef((props, ref) => {
    const { className, name = '', children, ...rest } = props
    const { formState } = useFormContext()

    const error = formState.errors[name]

    const body = error ? error.message : children

    if (!body) {
        return null
    }

    return (
        <Typography ref={ref} variant='text' className={cn('text-danger', className)} {...rest}>
            {body}
        </Typography>
    )
})

FormMessage.displayName = 'FormMessage'

export default FormMessage
