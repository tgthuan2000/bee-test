import Typography from '../../components/ui/typography'
import DataList from './data-list'
import SearchFilter from './search-filter'

function TrendingMovie() {
    return (
        <div className='container px-3 pt-5'>
            <Typography variant='page'>Trending Movie</Typography>
            <div className='my-4 flex flex-col justify-between gap-4 sm:flex-row'>
                <SearchFilter />
            </div>
            <div className='min-w-[350px] overflow-x-auto'>
                <DataList />
            </div>
        </div>
    )
}

export default TrendingMovie
