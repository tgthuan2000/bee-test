import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Search, Settings2 } from 'lucide-react'
import { useEffect } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import InputField from '../../components/template/input-field'
import FormField from '../../components/ui/form/form-field'
import { Dropdown, DropdownContent, DropdownGroup, DropdownItem, DropdownTrigger } from '../../components/ui/dropdown'
import Button from '../../components/ui/button'

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

            <FormField
                control={form.control}
                name='paginate'
                render={({ field }) => (
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant='outline' className='w-full'>
                                <Settings2 className='mr-2 h-5' />
                                Pagination
                            </Button>
                        </DropdownTrigger>
                        <DropdownContent>
                            <DropdownGroup>
                                <DropdownItem onSelect={() => field.onChange('infinity')}>
                                    {field.value === 'infinity' ? (
                                        <Check className='h-4 w-4' />
                                    ) : (
                                        <span className='h-4 w-4' />
                                    )}
                                    Infinity
                                </DropdownItem>
                                <DropdownItem onSelect={() => field.onChange('page')}>
                                    {field.value === 'page' ? (
                                        <Check className='h-4 w-4' />
                                    ) : (
                                        <span className='h-4 w-4' />
                                    )}
                                    Page
                                </DropdownItem>
                            </DropdownGroup>
                        </DropdownContent>
                    </Dropdown>
                )}
            />
        </FormProvider>
    )
}

export default SearchFilter

const useSearchFilterForm = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('search')?.trim()
    const paginateQuery = searchParams.get('paginate')?.trim().toLowerCase()
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            search: searchQuery ?? '',
            paginate: ['infinity', 'page'].includes(paginateQuery) ? paginateQuery : 'infinity',
        },
    })

    const watch = useWatch({
        control: form.control,
    })

    useEffect(() => {
        let { search, paginate } = watch
        search = search.trim()

        const url = new URLSearchParams(searchParams)

        if (search) {
            url.set('search', search)
        } else {
            url.delete('search')
        }

        if (paginate) {
            url.set('paginate', paginate)
        } else {
            url.delete('paginate', paginate)
        }

        setSearchParams(url)
    }, [searchParams, setSearchParams, watch])

    return form
}
