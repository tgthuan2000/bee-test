import { forwardRef } from 'react'
import { useForm } from './hooks/use-form'

const FormControl = forwardRef((props, ref) => {
    const { children } = props
    const { formItemId } = useForm()

    return children({
        ref,
        id: formItemId,
    })
})

FormControl.displayName = 'FormControl'

export default FormControl
