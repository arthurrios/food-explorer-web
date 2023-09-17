import { Container } from './styles'
import { TfiSearch } from 'react-icons/tfi'

export function Placeholder() {
  return (
    <Container>
      <TfiSearch />
      <span>Search for dishes and ingredients</span>
    </Container>
  )
}
