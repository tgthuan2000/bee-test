import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useEffect } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import InputField from '../../components/template/input-field'
import FormField from '../../components/ui/form/form-field'

const schema = z.object({
    search: z.string(),
})

function SearchFilter() {
    const form = useSearchFilterForm()

    return (
        <FormProvider {...form}>
            <FormField
                control={form.control}
                name='search'
                render={({ field }) => (
                    <div className='relative grow'>
                        <InputField
                            withoutLabel
                            placeholder='Mortal Kombat, Spider-Man, ...'
                            className='grow pl-10'
                            {...field}
                        />
                        <Search className='absolute left-4 top-1/2 -z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
                    </div>
                )}
            />
        </FormProvider>
    )
}

export default SearchFilter

const useSearchFilterForm = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            search: searchParams.get('search') ?? '',
        },
    })

    const watch = useWatch({
        control: form.control,
    })

    useEffect(() => {
        let { search } = watch
        search = search.trim()

        const url = new URLSearchParams(searchParams)

        if (search) {
            url.set('search', search)
        } else {
            url.delete('search')
        }

        setSearchParams(url)
    }, [searchParams, setSearchParams, watch])

    return form
}
