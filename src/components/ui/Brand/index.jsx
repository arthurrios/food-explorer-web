import { useNavigate } from 'react-router-dom'
import { Admin, Container, Logo } from './styles'
import { BsHexagonFill } from 'react-icons/bs'

export function Brand({ isAdmin, login = false }) {
  const navigate = useNavigate()

  function handleHome() {
    navigate('/')
  }

  return (
    <Container onClick={handleHome}>
      <Logo $login={login.toString()}>
        <BsHexagonFill />
        food explorer
      </Logo>
      {isAdmin ? <Admin>admin</Admin> : null}
    </Container>
  )
}
