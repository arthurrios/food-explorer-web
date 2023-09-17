import { Placeholder } from '../ui/Placeholder'
import { Container } from './styles'

export function Input({ icon: Icon, searchPlaceholder, children, ...props }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      {searchPlaceholder && <Placeholder />}
      <input autoComplete="off" {...props} />
      {children}
    </Container>
  )
}
