import { TfiMinus, TfiPlus } from 'react-icons/tfi'
import {
  AmmountOfDishes,
  Container,
  DishControls,
  TopRightButton,
} from './styles'
import { Button } from '../Button'
import { PiPencilSimple } from 'react-icons/pi'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

export function Card() {
  const { user } = useAuth()
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role)

  return (
    <Container>
      <img src="../../../public/dishes/Mask group-0.png" alt="" />
      <h3>Ravanello Salad &gt;</h3>
      <p>
        Radishes, green leaves and sweet and sour sauce sprinkled with sesame
      </p>
      <span>$ 24,97</span>

      {isAdmin ? (
        <TopRightButton>
          <PiPencilSimple />
        </TopRightButton>
      ) : (
        <>
          {/* <TopRightButton>
            <PiHeartStraight />
          </TopRightButton> */}
          <AmmountOfDishes>
            <DishControls>
              <TfiMinus />
              <span>01</span>
              <TfiPlus />
            </DishControls>
            <Button>add</Button>
          </AmmountOfDishes>
        </>
      )}
    </Container>
  )
}
