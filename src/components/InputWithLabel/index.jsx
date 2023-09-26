import { Container } from './styles'

export function InputWithLabel({ label, ...props }) {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input {...props} />
    </Container>
  )
}
