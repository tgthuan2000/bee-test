import moment from 'moment'
import numeral from 'numeral'
import { Link } from 'react-router-dom'
import Image from '../../components/ui/image'
import { Progress } from '../../components/ui/progress'
import Typography from '../../components/ui/typography'

export const columns = [
    {
        id: 'movie',
        label: 'Movie',
        renderRow: (row) => (
            <Link to={`${row.id}`} className='group inline-flex items-center gap-x-3'>
                <Image variant='table' src={'https://image.tmdb.org/t/p/w500' + row.poster_path} />

                <Typography variant='title' title={row.title} className='line-clamp-3 group-hover:underline'>
                    {row.title}
                </Typography>
            </Link>
        ),
    },
    {
        id: 'IMDb',
        label: 'IMDb',
        renderRow: (row) => {
            return (
                <div className='inline-flex w-28 flex-col items-start gap-y-0.5'>
                    <Typography variant='title'>{numeral(row.vote_average).format('0,0.0')}</Typography>
                    <Progress size='sm' value={row.vote_average * 10} />
                </div>
            )
        },
    },
    {
        id: 'release',
        label: 'Release',
        renderRow: (row) => {
            if (!row.release_date) {
                return (
                    <Typography variant='text' className='text-muted-foreground'>
                        --/--/----
                    </Typography>
                )
            }
            return <Typography variant='text'>{moment(row.release_date, 'YYYY-MM-DD').format('DD/MM/YYYY')}</Typography>
        },
    },
]
