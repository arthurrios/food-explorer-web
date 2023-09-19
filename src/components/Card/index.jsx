import { TfiMinus, TfiPlus } from 'react-icons/tfi'
import {
  AmmountOfDishes,
  Container,
  DishControls,
  TopRightButton,
} from './styles'
import { Button } from '../Button'
import { PiHeartStraight, PiPencilSimple } from 'react-icons/pi'

export function Card() {
  const isAdmin = false

  return (
    <Container>
      <img src="../../../public/dishes/Mask group-0.png" alt="" />
      <h3>Salada Ravanello &gt;</h3>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
      <span>R$ 49,97</span>

      {isAdmin ? (
        <TopRightButton>
          <PiPencilSimple />
        </TopRightButton>
      ) : (
        <>
          <TopRightButton>
            <PiHeartStraight />
          </TopRightButton>
          <AmmountOfDishes>
            <DishControls>
              <TfiMinus />
              <span>01</span>
              <TfiPlus />
            </DishControls>
            <Button>incluir</Button>
          </AmmountOfDishes>
        </>
      )}
    </Container>
  )
}
