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
    }, [searchQuery, handleSearch, refetch, getData])

    const handleFetchMore = () => {
        return fetchMorePage(!!searchQuery ? (newPage) => handleSearch({ page: newPage, query: searchQuery }) : getData)
    }

    const handleNextPage = () => {
        return fetchNextPage(!!searchQuery ? (newPage) => handleSearch({ page: newPage }) : getData)
    }

    const handlePrevPage = () => {
        return fetchPrevPage(!!searchQuery ? (newPage) => handleSearch({ page: newPage }) : getData)
    }

    if (loading) {
        return <Loader className='ml-2' />
    }

    return (
        <DataTable
            columns={columns}
            data={data.results}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            fetchMorePage={handleFetchMore}
            fetchNextPage={handleNextPage}
            fetchPrevPage={handlePrevPage}
            fetching={fetching}
        />
    )
}

export default DataList
