import { Admin, Container, Logo } from './styles'
import { BsHexagonFill } from 'react-icons/bs'

export function Brand({ isAdmin }) {
  return (
    <Container>
      <Logo>
        <BsHexagonFill />
        food explorer
      </Logo>
      {isAdmin ? <Admin>admin</Admin> : null}
    </Container>
  )
}
