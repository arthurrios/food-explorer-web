import { Brand, Container } from './styles'
import { BsHexagonFill } from 'react-icons/bs'

export function Footer() {
  return (
    <Container>
      <Brand>
        <BsHexagonFill />
        food explorer
      </Brand>
      <p>© 2023 - All rights reserved.</p>
    </Container>
  )
}
