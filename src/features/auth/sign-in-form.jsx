import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '../../contexts/auth'
import FormField from '../../components/ui/form/form-field'
import InputField from '../../components/template/input-field'
import Button from '../../components/ui/button'
import Typography from '../../components/ui/typography'

const schema = z.object({
    username: z.string(),
    password: z.string(),
})

function SignInForm() {
    const { signIn, loading } = useAuth()

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            username: '',
            password: '',
        },
    })

    const handleSubmit = async (data) => {
        const { username } = data

        await signIn({ username })
    }

    return (
        <div className='mx-auto flex h-screen w-full max-w-md items-center overflow-hidden px-3'>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className='w-full space-y-5'>
                    <Typography className='text-center'>Login</Typography>
                    <FormField
                        control={form.control}
                        name='username'
                        render={({ field }) => <InputField label='Username' placeholder='account123' {...field} />}
                    />

                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <InputField type='password' label='Password' placeholder='**********' {...field} />
                        )}
                    />
                    <Button size='lg' className='w-full' type='submit' loading={loading} disabled={loading}>
                        Enter Dashboard
                    </Button>
                </form>
            </FormProvider>
        </div>
    )
}

export default SignInForm
