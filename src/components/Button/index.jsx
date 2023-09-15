import { Container } from './styles'

export function Button({ icon: Icon, title, secondary = false, ...props }) {
  return (
    <Container $secondary={secondary.toString()} type="button" {...props}>
      {Icon && <Icon />}
      {title}
    </Container>
  )
}
