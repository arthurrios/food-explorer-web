import { Card } from '../../components/Card'
import { Carousel } from '../../components/Carousel'
import { Header } from '../../components/Header'
import { Banner, BgBanner, Container, Slogan, WrappedImg } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <Banner>
        <WrappedImg />
        <Slogan>
          <h1>Unmatched flavors!</h1>
          <p>Feel the care of the preparation with selected ingredients</p>
        </Slogan>
        <BgBanner />
      </Banner>
      <Carousel
        title="Meals"
        content={
          <>
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        }
      ></Carousel>
      <Carousel
        title="Beverages"
        content={
          <>
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        }
      ></Carousel>
      <Carousel
        title="Desserts"
        content={
          <>
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        }
      ></Carousel>
    </Container>
  )
}
