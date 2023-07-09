import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import Typography from '../../ui/typography'
import { useForm } from './hooks/use-form'

const FieldMessage = forwardRef((props, ref) => {
    const { className, children, index, ...rest } = props
    const { error, formMessageId } = useForm()

    const body = error
        ? Array.isArray(error)
            ? index
                ? error[index]?.message
                : undefined
            : error?.message
        : children

    if (!body) {
        return null
    }

    return (
        <Typography ref={ref} id={formMessageId} variant='text' className={cn('text-danger', className)} {...rest}>
            {body}
        </Typography>
    )
})

FieldMessage.displayName = 'FieldMessage'

export default FieldMessage
