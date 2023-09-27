import { TfiMinus, TfiPlus } from 'react-icons/tfi'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { ReturnButton } from '../../components/ReturnButton'
import {
  Container,
  Dish,
  DishControls,
  Main,
  NameAndValue,
  Orders,
  Price,
} from './styles'
import { Button } from '../../components/Button'

export function Order() {
  return (
    <Container>
      <Header />
      <Main>
        <ReturnButton />
        <h1>My Order</h1>
        <div>
          <Orders>
            <Dish>
              <img src="../../../public/dishes/Mask group-0.png" alt="" />
              <div>
                <NameAndValue>
                  1x Radish salad
                  <span>$ 24,97</span>
                </NameAndValue>
                <DishControls>
                  <TfiMinus />
                  <Button>Delete</Button>
                  <TfiPlus />
                </DishControls>
              </div>
            </Dish>
          </Orders>
          <Price>
            Total: $ 24,97
            <Button disabled>Next</Button>
          </Price>
        </div>
      </Main>
      <Footer />
    </Container>
  )
}
