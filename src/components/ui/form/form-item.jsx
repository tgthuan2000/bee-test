import { forwardRef, useId } from 'react'
import { cn } from '~/lib/utils'
import { FormItemProvider } from './contexts/form-item'

const FormItem = forwardRef((props, ref) => {
    const { className, children, ...rest } = props
    const id = useId()

    return (
        <FormItemProvider value={{ id }}>
            <div ref={ref} className={cn('space-y-1.5', className)} {...rest}>
                {children}
            </div>
        </FormItemProvider>
    )
})

FormItem.displayName = 'FormItem'

export default FormItem
