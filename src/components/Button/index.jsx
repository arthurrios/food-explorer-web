import { Container } from './styles'

export function Button({
  children,
  secondary = false,
  tertiary = false,
  ...props
}) {
  return (
    <Container
      $secondary={secondary.toString()}
      $tertiary={tertiary.toString()}
      type="button"
      {...props}
    >
      {children}
    </Container>
  )
}
