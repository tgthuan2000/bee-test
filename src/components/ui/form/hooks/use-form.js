import { useFormContext } from 'react-hook-form'
import { useFormField } from '../contexts/form-field'
import { useFormItem } from '../contexts/form-item'

export const useForm = () => {
    const { name } = useFormField()
    const { id } = useFormItem()
    const { getFieldState, formState } = useFormContext()
    const { error, ...fieldState } = getFieldState(name, formState)

    return {
        id,
        name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        error: error,
        formError: formState.errors,
        ...fieldState,
    }
}
