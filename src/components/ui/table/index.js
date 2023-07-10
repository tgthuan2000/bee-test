import TableBody from './body'
import TableCell from './cell'
import TableFooter from './footer'
import TableHead from './head'
import TableHeader from './header'
import TableRow from './row'
import Table from './table'

export { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow }

/**
 * @example
 * function Example(){
 *  return (
 *      <Table>
 *          <TableHeader>
 *              <TableRow>
 *                  <TableHead>Head 1</TableHead>
 *                  <TableHead>Head 2</TableHead>
 *                  <TableHead>Head 3</TableHead>
 *              </TableRow>
 *          </TableHeader>
 *          <TableBody>
 *              <TableRow>
 *                  <TableCell>Cell 1</TableCell>
 *                  <TableCell>Cell 2</TableCell>
 *                  <TableCell>Cell 3</TableCell>
 *              </TableRow>
 *              <TableRow>...</TableRow>
 *          </TableBody>
 *          <TableFooter>
 *              ...
 *          </TableFooter>
 *      </Table>
 * )
 * }
 */
