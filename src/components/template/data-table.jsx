import { isEmpty } from 'lodash'
import Button from '../ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import Typography from '../ui/typography'
import { Quote } from 'lucide-react'

export default function DataTable({
    columns,
    data,
    hasNextPage,
    hasPrevPage,
    fetchMorePage,
    fetchNextPage,
    fetchPrevPage,
    fetching,
}) {
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
                {hasNextPage && (
                    <TableRow>
                        <TableCell colSpan={columns.length}>
                            <Button variant='link' onClick={fetchMorePage} loading={fetching} disabled={fetching}>
                                Tải thêm
                            </Button>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
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
