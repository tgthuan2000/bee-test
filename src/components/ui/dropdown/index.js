import DropdownContent from './content'
import DropdownProvider from './contexts/dropdown'
import DropdownGroup from './group'
import DropdownIcon from './icon'
import DropdownItem from './item'
import DropdownLabel from './label'
import DropdownSeparator from './separator'
import DropdownTrigger from './trigger'

/**
 * @example
 * const Example = () => {
 *      return (
 *          <Dropdown>
 *              <DropdownTrigger>Trigger</DropdownTrigger>
 *              <DropdownContent>
 *                  <DropdownLabel>Label</DropdownLabel>
 *                  <DropdownSeparator />
 *                  <DropdownGroup>
 *                      <DropdownItem>Item 1<DropdownItem>
 *                      <DropdownItem>Item 2<DropdownItem>
 *                      <DropdownItem>Item 3<DropdownItem>
 *                  </DropdownGroup>
 *              </DropdownContent>
 *          </Dropdown>
 *      )
 * }
 */

const Dropdown = DropdownProvider

export {
    Dropdown,
    DropdownContent,
    DropdownGroup,
    DropdownIcon,
    DropdownItem,
    DropdownLabel,
    DropdownSeparator,
    DropdownTrigger,
}
