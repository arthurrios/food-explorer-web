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
import { useParams, useNavigate } from 'react-router-dom'
import { USER_ROLE } from '../../utils/roles'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import defaultDish from '../../assets/dish.svg'

export function Dish() {
  const { user } = useAuth()
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role)

  const [dish, setDish] = useState()
  const [dishAmount, setDishAmount] = useState(1)
  const [dishToAdd, setDishToAdd] = useState()
  const [orderItems, setOrderItems] = useState(0)

  const navigate = useNavigate()

  function decrease() {
    if (dishAmount > 1) {
      setDishAmount((prevState) => prevState - 1)
    }
  }

  function increase() {
    setDishAmount((prevState) => prevState + 1)
  }

  const params = useParams()

  function handleEditDish(id) {
    navigate(`/edit-dish/${id}`)
  }

  const queryWidth = 1050
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function handleAddDish(dishId, amount) {
    setDishToAdd({ dishId, amount })
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (dishToAdd) {
      const oldItems = JSON.parse(localStorage.getItem('@fexplorer:order'))
      const existingDishIndex = oldItems.dishes.findIndex(
        (dish) => dish.dishId === dishToAdd.dishId,
      )

      const updatedOrder = { ...oldItems }

      if (existingDishIndex !== -1) {
        updatedOrder.dishes[existingDishIndex].amount += dishToAdd.amount
      } else {
        updatedOrder.dishes.push(dishToAdd)
      }

      localStorage.setItem('@fexplorer:order', JSON.stringify(updatedOrder))

      setOrderItems(orderItems + dishToAdd.amount)

      alert('Dish(es) added to order.')
    }
  }, [dishToAdd])

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`, {
          withCredentials: true,
        })
        setDish(response.data)
      } catch (error) {
        console.error('There was an error fetching dish:', error)
      }
    }
    fetchDish()
  })

  return (
    <Container>
      <Header orderItems={orderItems} dish={dish} />
      <Main>
        <ReturnButton />
        {dish && (
          <DishItem>
            <img
              src={
                dish.image
                  ? `${api.defaults.baseURL}/files/${dish.image}`
                  : `${defaultDish}`
              }
              alt={`Imagem de ${dish.description}`}
            />
            <div>
              <DishInfo>
                <h1>{dish.name}</h1>
                <h2>{dish.description}</h2>
                <Ingredients>
                  {dish.ingredients.length > 0 &&
                    dish.ingredients.map((ingredient) => (
                      <Ingredient
                        key={ingredient.id}
                        ingredient={ingredient.name}
                      />
                    ))}
                </Ingredients>
              </DishInfo>
              {isAdmin ? (
                <Button onClick={() => handleEditDish(params.id)}>
                  Edit dish
                </Button>
              ) : (
                <AmmountOfDishes>
                  <DishControls>
                    <TfiMinus onClick={decrease} />
                    <span>{dishAmount.toString().padStart(2, '0')}</span>
                    <TfiPlus onClick={increase} />
                  </DishControls>
                  {windowWidth >= queryWidth ? (
                    <Button onClick={() => handleAddDish(dish.id, dishAmount)}>
                      add ∙ ${' '}
                      {(Number(dish.price) * Number(dishAmount))
                        .toFixed(2)
                        .toString()
                        .replace('.', ',')}
                    </Button>
                  ) : (
                    <Button onClick={() => handleAddDish(dish.id, dishAmount)}>
                      <PiReceipt />
                      order ∙ ${' '}
                      {(Number(dish.price) * Number(dishAmount))
                        .toFixed(2)
                        .toString()
                        .replace('.', ',')}
                    </Button>
                  )}
                </AmmountOfDishes>
              )}
            </div>
          </DishItem>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
