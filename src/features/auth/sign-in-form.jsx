import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '../../contexts/auth'
import FormField from '../../components/ui/form/form-field'
import InputField from '../../components/template/input-field'

const schema = z.object({
    username: z.string(),
    password: z.string(),
})

function SignInForm() {
    const { signIn } = useAuth()

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            username: '',
            password: '',
        },
    })

    const handleSubmit = (data) => {
        const { username } = data

        signIn(username)
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => <InputField label='Username' placeholder='Enter your username' {...field} />}
                />

                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <InputField type='password' label='Password' placeholder='Enter your password' {...field} />
                    )}
                />
            </form>
        </FormProvider>
    )
}

export default SignInForm
