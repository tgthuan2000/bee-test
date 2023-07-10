import { isEmpty } from 'lodash'
import { ArrowLeft, ArrowRight, ArrowUp, Quote } from 'lucide-react'
import numeral from 'numeral'
import Button from '../ui/button'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../ui/table'
import Typography from '../ui/typography'
import Loader from '../ui/loader'

export default function DataTable({
    columns,
    data,
    hasNextPage,
    hasPrevPage,
    fetchMorePage,
    fetchNextPage,
    fetchPrevPage,
    fetching,
    page,
    totalPages,
    paginate = 'infinity',
}) {
    const isInfinity = paginate === 'infinity'
    const isPage = paginate === 'page'

    const handleBackToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <Table>
            <TableHeader>
                <TableRow className='hover:bg-transparent'>
                    {columns.map((col) => (
                        <TableHead key={col.id}>{col.label}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {isEmpty(data) ? (
                    <TableRow>
                        <TableCell colSpan={columns.length}>
                            <div className='flex flex-col items-center gap-2'>
                                <Quote className='h-12 w-12' />
                                <Typography variant='text' className='text-muted-foreground'>
                                    Empty Data!
                                </Typography>
                            </div>
                        </TableCell>
                    </TableRow>
                ) : (
                    data?.map((row) => (
                        <TableRow key={row.id}>
                            {columns.map((cell) => (
                                <TableCell key={cell.id}>{cell.renderRow(row)}</TableCell>
                            ))}
                        </TableRow>
                    ))
                )}
                {isInfinity && hasNextPage && (
                    <TableRow>
                        <TableCell colSpan={columns.length}>
                            <div className='flex items-center justify-between'>
                                <Button variant='link' onClick={fetchMorePage} loading={fetching} disabled={fetching}>
                                    Load more
                                </Button>
                                <Button size='icon' className='animate-bounce' onClick={handleBackToTop}>
                                    <ArrowUp className='h-5 w-5' />
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
            {isPage && (
                <TableFooter className='border-t'>
                    <TableRow className='hover:bg-transparent'>
                        <TableCell colSpan={columns.length}>
                            <div className='flex items-center justify-between gap-3'>
                                <Typography variant='text' as='span'>
                                    Showing page{' '}
                                    <Typography variant='title' as='span'>
                                        {numeral(page).format()}
                                    </Typography>{' '}
                                    of{' '}
                                    <Typography variant='title' as='span'>
                                        {numeral(totalPages).format()}
                                    </Typography>
                                </Typography>
                                <div className='inline-flex items-center space-x-2'>
                                    {fetching && <Loader />}
                                    <Button
                                        type='button'
                                        variant='ghost'
                                        size='icon'
                                        onClick={fetchPrevPage}
                                        disabled={!hasPrevPage || fetching}
                                    >
                                        <ArrowLeft className='h-5 w-5' />
                                    </Button>
                                    <Button
                                        type='button'
                                        variant='ghost'
                                        size='icon'
                                        onClick={fetchNextPage}
                                        disabled={!hasNextPage || fetching}
                                    >
                                        <ArrowRight className='h-5 w-5' />
                                    </Button>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            )}
        </Table>
    )
}

/**
 * @example
 * function Example() {
 *      return (
 *          <DataTable
 *              columns={[]}
 *              data={[]}
 *              hasNextPage={true}
 *              loading={false}
 *              fetchNextPage={()=>{}}
 *          />
 *      )
 * }
 }
 */

/**
 * @example columns
 * const columns = [
 *     {
 *         id: "id",
 *         label: "Table ID",
 *         renderRow: (row) => row.id,
 *     },
 *      {
 *          id: "username"
 *          label: "Username",
 *          renderRow: (row) => row.username
 *      }
 *      ...
 * ]
 */
