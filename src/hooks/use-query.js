import { useCallback, useState } from 'react'
import axios from '../config'

export function useQuery(queries = { query: '', search: '' }, page = 1) {
    const { query, search } = queries
    const [data, setData] = useState({
        page: 1,
        totalPages: 0,
        results: [],
    })
    const [fetching, setFetching] = useState(false)

    const hasNextPage = data.page !== data.totalPages
    const hasPrevPage = data.page !== 1

    const getData = useCallback(
        async (page = 1) => {
            try {
                setFetching(true)
                const { data } = await axios.get(query, { params: { page } })
                return {
                    page: data.page,
                    totalPages: data.total_pages,
                    results: data.results,
                }
            } catch (error) {
                throw new Error(error)
            } finally {
                setFetching(false)
            }
        },
        [query]
    )

    const handleSearch = useCallback(
        async (params = {}) => {
            try {
                setFetching(true)
                const { data } = await axios.get(search, { params })
                return {
                    page: data.page,
                    totalPages: data.total_pages,
                    results: data.results,
                }
            } catch (error) {
                throw new Error(error)
            } finally {
                setFetching(false)
            }
        },
        [search]
    )

    const fetchMorePage = useCallback(
        async (callback) => {
            const newData = await callback(data.page + 1)
            if (!newData) {
                return
            }
            setData((prev) => ({
                page: newData.page,
                results: [...prev.results, ...newData.results],
                totalPages: newData.totalPages,
            }))
        },
        [data.page]
    )

    const fetchNextPage = useCallback(
        async (callback) => {
            setData(await callback(data.page + 1))
        },
        [data.page]
    )

    const fetchPrevPage = useCallback(
        async (callback) => {
            setData(await callback(data.page - 1))
        },
        [data.page]
    )

    const refetch = useCallback(async (callback) => {
        setData(await callback())
    }, [])

    return {
        fetching,
        data,
        hasNextPage,
        hasPrevPage,
        refetch,
        fetchPrevPage,
        fetchNextPage,
        fetchMorePage,
        handleSearch,
        getData,
    }
}
