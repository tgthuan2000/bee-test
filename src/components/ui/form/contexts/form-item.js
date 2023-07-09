import { createContext, useContext } from 'react'

const FormItemContext = createContext({})

const useFormItem = () => {
    const ctx = useContext(FormItemContext)

    if (!ctx) {
        throw new Error('useFormItem should be used within <FormItemContext>')
    }

    return ctx
}

const FormItemProvider = FormItemContext.Provider

export { FormItemProvider, useFormItem }
