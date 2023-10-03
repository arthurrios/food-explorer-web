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
import { useAuth } from '../../hooks/auth'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import defaultDish from '../../assets/dish.svg'

export function Order() {
  const { user, order } = useAuth()

  const [dishes, setDishes] = useState([])
  const [items, setItems] = useState([])
  const [orderTotal, setOrderTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  function viewTotalOrder(orderDishes) {
    let total = 0
    setOrderTotal(0)
    const dishAmount = {}
    const oldItems = JSON.parse(localStorage.getItem('@fexplorer:order'))

    oldItems.dishes.forEach((dish) => {
      dishAmount[dish.dishId] = dish.amount
    })

    const updatedOrder = orderDishes
      .map((orderDish) => {
        if (dishAmount[orderDish.id] > 0) {
          const dishTotal = dishAmount[orderDish.id] * orderDish.price
          setOrderTotal((total += dishTotal))

          return {
            id: orderDish.id,
            image: orderDish.image,
            amount: dishAmount[orderDish.id],
            name: orderDish.name,
            price: dishTotal,
          }
        }
      })
      .filter((item) => item !== undefined)

    setItems(updatedOrder)
  }

  useEffect(() => {
    const oldItems = JSON.parse(localStorage.getItem('@fexplorer:order'))
    const dishIds = oldItems.dishes.map((dish) => dish.dishId)

    async function fetchDishes() {
      try {
        const response = await api.get(`/payment?dishIds=${dishIds}`, {
          withCredentials: true,
        })
        setDishes(response.data)
        viewTotalOrder(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error('There was an error fetching dishes:', error)
      }
    }

    fetchDishes()
  }, [])

  return (
    <Container>
      <Header totalOrder={orderTotal} />
      <Main>
        <ReturnButton />
        <h1>My Order</h1>
        <div>
          <Orders>
            {items.length > 0
              ? items.map((item) => (
                  <Dish key={item.id}>
                    <img
                      src={
                        item.image
                          ? `${api.defaults.baseURL}/files/${item.image}`
                          : defaultDish
                      }
                      alt=""
                    />
                    <div>
                      <NameAndValue>
                        {`${item.amount}x ${item.name}`}
                        <span>$ {item.price.toFixed(2).replace('.', ',')}</span>
                      </NameAndValue>
                      <DishControls>
                        <TfiMinus />
                        <Button>Delete</Button>
                        <TfiPlus />
                      </DishControls>
                    </div>
                  </Dish>
                ))
              : null}
          </Orders>

          {items.length > 0 && (
            <Price>
              Total: $ {orderTotal.toFixed(2).replace('.', ',')}
              <Button disabled>Next</Button>
            </Price>
          )}
        </div>
      </Main>
      <Footer />
    </Container>
  )
}
