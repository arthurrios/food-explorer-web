import { Container, Content, GradientLeft, GradientRight } from './styles'

export function Carousel({ title, content }) {
  return (
    <Container>
      <h3>{title}</h3>
      <Content>{content}</Content>
      <GradientLeft />
      <GradientRight />
    </Container>
  )
}
