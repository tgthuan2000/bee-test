import { Controller } from 'react-hook-form'
import { FormFieldProvider } from './contexts/form-field'

function FormField(props) {
    const { name } = props

    return (
        <FormFieldProvider value={{ name }}>
            <Controller {...props} />
        </FormFieldProvider>
    )
}

export default FormField
