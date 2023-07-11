import { useEffect } from 'react'
import { Waypoint } from 'react-waypoint'
import Image from '../../components/ui/image'
import Loader from '../../components/ui/loader'
import { useQuery } from '../../hooks/use-query'

function FeedSlide() {
    const { data, getData, fetchMorePage, hasNextPage, fetching, refetch } = useQuery({
        query: '/movie/popular',
    })

    useEffect(() => {
        refetch(getData)
    }, [refetch, getData])

    return (
        <div className='relative mx-auto mt-10 h-60 max-w-5xl'>
            <div className='scroll-mask h-full'>
                <div className='hidden-scroll flex h-full snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-16'>
                    {data.results?.map((result, i) => (
                        <Image key={i} variant='feed' src={'https://image.tmdb.org/t/p/w500' + result.poster_path} />
                    ))}
                    {fetching ? (
                        <div>
                            <Loader />
                        </div>
                    ) : (
                        hasNextPage && (
                            <Waypoint
                                onEnter={() => {
                                    fetchMorePage(getData)
                                }}
                                horizontal
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default FeedSlide
