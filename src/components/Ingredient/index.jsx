import { Container } from './styles'

export function Ingredient({ ingredient }) {
  return <Container>{ingredient.toLowerCase()}</Container>
}
