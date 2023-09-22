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

export function Dish() {
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
            <AmmountOfDishes>
              <DishControls>
                <TfiMinus />
                <span>01</span>
                <TfiPlus />
              </DishControls>
              <Button>add ∙ $ 24,75</Button>
            </AmmountOfDishes>
          </div>
        </DishItem>
      </Main>
      <Footer />
    </Container>
  )
}
