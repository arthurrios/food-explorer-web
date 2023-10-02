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
import { useParams } from 'react-router-dom'
import { USER_ROLE } from '../../utils/roles'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import defaultDish from '../../assets/dish.svg'

export function Dish() {
  const { user } = useAuth()
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role)

  const [dish, setDish] = useState()
  const [dishAmount, setDishAmount] = useState(1)

  function decrease() {
    if (dishAmount > 1) {
      setDishAmount((prevState) => prevState - 1)
    }
  }

  function increase() {
    setDishAmount((prevState) => prevState + 1)
  }

  const params = useParams()

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
  }, [])

  return (
    <Container>
      <Header />
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
                <Button>Edit dish</Button>
              ) : (
                <AmmountOfDishes>
                  <DishControls>
                    <TfiMinus onClick={decrease} />
                    <span>{dishAmount.toString().padStart(2, '0')}</span>
                    <TfiPlus onClick={increase} />
                  </DishControls>
                  {windowWidth >= queryWidth ? (
                    <Button>
                      add ∙ ${' '}
                      {(Number(dish.price) * Number(dishAmount))
                        .toFixed(2)
                        .toString()
                        .replace('.', ',')}
                    </Button>
                  ) : (
                    <Button>
                      <PiReceipt />
                      order ∙ $${' '}
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
