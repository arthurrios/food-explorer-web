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
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Card({ dish, setDishToAdd }) {
  const { user } = useAuth()
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role)

  const navigate = useNavigate()

  const dishImage = dish.image
    ? `${api.defaults.baseURL}/files/${dish.image}`
    : `${defaultDish}`

  function handleDish(id) {
    navigate(`/dish/${id}`)
  }

  function handleEditDish(id) {
    navigate(`/edit-dish/${id}`)
  }

  const [dishAmount, setDishAmount] = useState(1)

  function decrease() {
    if (dishAmount > 1) {
      setDishAmount((prevState) => prevState - 1)
    }
  }

  function increase() {
    setDishAmount((prevState) => prevState + 1)
  }

  function handleAddDish(dishId, amount) {
    setDishToAdd({ dishId, amount })
  }

  return (
    <Container>
      <img
        src={dishImage}
        alt={`Imagem de ${dish.description.toLowerCase()}`}
        onClick={() => handleDish(dish.id)}
      />
      <h3>{dish.name} &gt;</h3>
      <p>{dish.description}</p>
      <span>$ {dish.price.toFixed(2).replace('.', ',')}</span>

      {isAdmin ? (
        <TopRightButton onClick={() => handleEditDish(dish.id)}>
          <PiPencilSimple />
        </TopRightButton>
      ) : (
        <>
          {/* <TopRightButton>
            <PiHeartStraight />
          </TopRightButton> */}
          <AmmountOfDishes>
            <DishControls>
              <TfiMinus onClick={decrease} />
              <span>{dishAmount.toString().padStart(2, '0')}</span>
              <TfiPlus onClick={increase} />
            </DishControls>
            <Button onClick={() => handleAddDish(dish.id, dishAmount)}>
              add
            </Button>
          </AmmountOfDishes>
        </>
      )}
    </Container>
  )
}
