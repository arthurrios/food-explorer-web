import { IoIosArrowBack } from 'react-icons/io'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

export function ReturnButton() {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container onClick={handleBack}>
      <IoIosArrowBack />
      return
    </Container>
  )
}
