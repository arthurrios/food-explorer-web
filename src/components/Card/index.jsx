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
import { api } from '../../services/api'
import defaultDish from '../../assets/dish.svg'

export function Card({ dish, setDishToAdd }) {
  const { user } = useAuth()
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role)

  const dishImage = dish.image
    ? `${api.defaults.baseURL}/files/${dish.image}`
    : `${defaultDish}`

  return (
    <Container>
      <img
        src={dishImage}
        alt={`Imagem de ${dish.description.toLowerCase()}`}
      />
      <h3>{dish.name} &gt;</h3>
      <p>{dish.description}</p>
      <span>$ {dish.price.toFixed(2).replace('.', ',')}</span>

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
