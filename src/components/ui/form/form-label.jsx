import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import Label from '../../ui/label'
import { useForm } from './hooks/use-form'

const FormLabel = forwardRef((props, ref) => {
    const { className, ...rest } = props
    const { formItemId } = useForm()

    return <Label ref={ref} className={cn(className)} htmlFor={formItemId} {...rest} />
})

FormLabel.displayName = 'FormLabel'

export default FormLabel
