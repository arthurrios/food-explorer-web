import { Container } from './styles'

export function Button({ children, secondary = false, ...props }) {
  return (
    <Container $secondary={secondary.toString()} type="button" {...props}>
      {children}
    </Container>
  )
}
