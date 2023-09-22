import { Admin, Container, Logo } from './styles'
import { BsHexagonFill } from 'react-icons/bs'

export function Brand({ isAdmin, login = false }) {
  return (
    <Container>
      <Logo $login={login.toString()}>
        <BsHexagonFill />
        food explorer
      </Logo>
      {isAdmin ? <Admin>admin</Admin> : null}
    </Container>
  )
}
