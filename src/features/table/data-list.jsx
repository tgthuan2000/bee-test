import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import DataTable from '../../components/template/data-table'
import { useQuery } from '../../hooks/use-query'
import { columns } from './data-column'
import Loader from '../../components/ui/loader'

function DataList() {
    const {
        data,
        getData,
        fetchNextPage,
        fetchPrevPage,
        hasNextPage,
        hasPrevPage,
        fetchMorePage,
        fetching,
        handleSearch,
        refetch,
    } = useQuery({
        query: '/movie/popular',
        search: '/search/movie',
    })
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('search')?.trim()
    const paginate = searchParams.get('paginate')?.trim().toLowerCase()

    useEffect(() => {
        const timeout = setTimeout(async () => {
            await refetch(() => {
                return searchQuery ? handleSearch({ query: searchQuery, page: 1 }) : getData(1)
            })
            setLoading(false)
        }, 1500)

        return () => {
            timeout && clearTimeout(timeout)
        }
    }, [searchQuery, paginate, handleSearch, refetch, getData])

    const handleFetch = (callback) => {
        return callback(!!searchQuery ? (newPage) => handleSearch({ page: newPage, query: searchQuery }) : getData)
    }

    if (loading) {
        return <Loader className='ml-2' />
    }

    return (
        <DataTable
            paginate={paginate}
            columns={columns}
            data={data.results}
            page={data.page}
            totalPages={data.totalPages}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            fetchMorePage={() => handleFetch(fetchMorePage)}
            fetchNextPage={() => handleFetch(fetchNextPage)}
            fetchPrevPage={() => handleFetch(fetchPrevPage)}
            fetching={fetching}
        />
    )
}

export default DataList
