import { Container, Selector } from './styles'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export function Select({ children, ...props }) {
  return (
    <Container>
      <Selector {...props}>{children}</Selector>
      <MdOutlineKeyboardArrowDown />
    </Container>
  )
}
