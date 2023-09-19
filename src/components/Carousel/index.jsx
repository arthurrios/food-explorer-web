import { useState, useRef } from 'react'
import {
  Container,
  Content,
  ControlLeft,
  ControlRight,
  GradientLeft,
  GradientRight,
} from './styles'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export function Carousel({ title, content }) {
  const carousel = useRef(null)
  const [isScrollStart, setIsScrollStart] = useState(true)
  const [isScrollEnd, setIsScrollEnd] = useState(false)

  const scrollToRight = () => {
    const container = carousel.current
    container.scrollLeft += 180
    setIsScrollStart(false)
    setIsScrollEnd(
      container.clientWidth + container.scrollLeft + 331 >=
        container.scrollWidth,
    )
  }

  const scrollToLeft = () => {
    const container = carousel.current
    container.scrollLeft -= 180
    setIsScrollStart(false)
    setIsScrollEnd(container.scrollLeft - 331 <= 0)
  }

  return (
    <Container>
      <h3>{title}</h3>
      <Content ref={carousel}>{content}</Content>
      <ControlLeft onClick={scrollToLeft}>
        <IoIosArrowBack />
      </ControlLeft>
      <ControlRight onClick={scrollToRight}>
        <IoIosArrowForward />
      </ControlRight>
      <GradientLeft />
      <GradientRight />
    </Container>
  )
}
