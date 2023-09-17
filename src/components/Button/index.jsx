import { Container } from './styles'

export function Button({ icon: Icon, children, secondary = false, ...props }) {
  return (
    <Container $secondary={secondary.toString()} type="button" {...props}>
      {Icon && <Icon />}
      {children}
    </Container>
  )
}
