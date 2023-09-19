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
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
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
