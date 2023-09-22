import { TfiMinus, TfiPlus } from 'react-icons/tfi'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Ingredient } from '../../components/Ingredient'
import { ReturnButton } from '../../components/ReturnButton'
import {
  AmmountOfDishes,
  Container,
  DishControls,
  DishInfo,
  DishItem,
  Ingredients,
  Main,
} from './styles'
import { Button } from '../../components/Button'
import { useEffect, useState } from 'react'
import { PiReceipt } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export function Dish() {
  const isAdmin = true

  const queryWidth = 1050
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <Header />
      <Main>
        <ReturnButton />
        <DishItem>
          <img src="../../../public/dishes/Mask group-0.png" alt="" />
          <div>
            <DishInfo>
              <h1>Ravanello Salad</h1>
              <h2>
                Radishes, green leaves and sweet and sour sauce sprinkled with
                sesame
              </h2>
              <Ingredients>
                <Ingredient ingredient="lettuce" />
                <Ingredient ingredient="onion" />
                <Ingredient ingredient="naan bread" />
                <Ingredient ingredient="cucumber" />
                <Ingredient ingredient="radish" />
                <Ingredient ingredient="tomato" />
              </Ingredients>
            </DishInfo>
            {isAdmin ? (
              <Link to="/edit/:id">
                <Button>Edit dish</Button>
              </Link>
            ) : (
              <AmmountOfDishes>
                <DishControls>
                  <TfiMinus />
                  <span>01</span>
                  <TfiPlus />
                </DishControls>
                {windowWidth >= queryWidth ? (
                  <Button>add ∙ $ 24,75</Button>
                ) : (
                  <Button>
                    <PiReceipt />
                    order ∙ $ 24,75
                  </Button>
                )}
              </AmmountOfDishes>
            )}
          </div>
        </DishItem>
      </Main>
      <Footer />
    </Container>
  )
}
