import { forwardRef } from 'react'
import FieldMessage from '../ui/form/field-message'
import FormControl from '../ui/form/form-control'
import FormItem from '../ui/form/form-item'
import FormLabel from '../ui/form/form-label'
import Input from '../ui/input'

const InputField = forwardRef((props, ref) => {
    const { type = 'text', label = 'Label', withoutMessage = false, placeholder = 'Placeholder', ...rest } = props

    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                {({ id }) => <Input type={type} id={id} placeholder={placeholder} {...rest} ref={ref} />}
            </FormControl>
            {!withoutMessage && <FieldMessage />}
        </FormItem>
    )
})

InputField.displayName = 'InputField'

export default InputField
