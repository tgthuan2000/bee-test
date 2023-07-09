import { createContext, useContext } from 'react'

const FormFieldContext = createContext({})

const useFormField = () => {
    const ctx = useContext(FormFieldContext)

    if (!ctx) {
        throw new Error('useFormField should be used within <FormFieldContext>')
    }

    return ctx
}

const FormFieldProvider = FormFieldContext.Provider

export { FormFieldProvider, useFormField }
