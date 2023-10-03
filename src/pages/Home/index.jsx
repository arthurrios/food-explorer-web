import { useState, useEffect } from 'react'
import { Card } from '../../components/Card'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import {
  Banner,
  BgBanner,
  Container,
  Main,
  NoResults,
  Slogan,
  WrappedImg,
} from './styles'
import { api } from '../../services/api'

export function Home() {
  const [meals, setMeals] = useState([])
  const [beverages, setBeverages] = useState([])
  const [desserts, setDesserts] = useState([])
  const [dishToAdd, setDishToAdd] = useState()

  const [dishes, setDishes] = useState([])
  const page = 'home'

  const [orderItems, setOrderItems] = useState(0)

  const [itemSearch, setItemSearch] = useState('')
  const [filteredSearch, setFilteredSearch] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?name=${search}`, {
          withCredentials: true,
        })

        setDishes(response.data)

        const mealsArray = response.data.filter(
          (dish) => dish.category === 'Meals',
        )
        const beveragesArray = response.data.filter(
          (dish) => dish.category === 'Beverages',
        )
        const dessertsArray = response.data.filter(
          (dish) => dish.category === 'Desserts',
        )

        setMeals(
          mealsArray.map((meal) => (
            <Card key={meal.id} dish={meal} setDishToAdd={setDishToAdd} />
          )),
        )

        setBeverages(
          beveragesArray.map((beverage) => (
            <Card
              key={beverage.id}
              dish={beverage}
              setDishToAdd={setDishToAdd}
            />
          )),
        )

        setDesserts(
          dessertsArray.map((dessert) => (
            <Card key={dessert.id} dish={dessert} setDishToAdd={setDishToAdd} />
          )),
        )
      } catch (err) {
        console.error('There was an error fetching dishes', err)
      }
    }

    fetchDishes()
  }, [])

  useEffect(() => {
    function filterDishesByNameOrIngredient(searchQuery) {
      searchQuery = searchQuery.toLowerCase()

      const filteredDishes = dishes.filter(function (dish) {
        if (dish.name.toLowerCase().includes(searchQuery)) {
          return true
        }

        const foundIngredient = dish.ingredients.find(function (ingredient) {
          return ingredient.name.toLowerCase().includes(searchQuery)
        })

        return !!foundIngredient
      })

      return filteredDishes
    }

    const searchResult = filterDishesByNameOrIngredient(itemSearch)
    setFilteredSearch(searchResult)

    const mealsArray = searchResult.filter((dish) => dish.category === 'Meals')
    const beveragesArray = searchResult.filter(
      (dish) => dish.category === 'Beverages',
    )
    const dessertsArray = searchResult.filter(
      (dish) => dish.category === 'Desserts',
    )

    setMeals(
      mealsArray.map((meal) => (
        <Card key={meal.id} dish={meal} setDishToAdd={setDishToAdd} />
      )),
    )

    setBeverages(
      beveragesArray.map((beverage) => (
        <Card key={beverage.id} dish={beverage} setDishToAdd={setDishToAdd} />
      )),
    )

    setDesserts(
      dessertsArray.map((dessert) => (
        <Card key={dessert.id} dish={dessert} setDishToAdd={setDishToAdd} />
      )),
    )
  }, [itemSearch])

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

  return (
    <>
      <Container>
        <Header
          setItemSearch={setItemSearch}
          page={page}
          dishes={dishes}
          orderItems={orderItems}
        />
        <Main>
          <Banner>
            <WrappedImg />
            <Slogan>
              <h1>Unmatched flavors!</h1>
              <p>Feel the care of the preparation with selected ingredients</p>
            </Slogan>
            <BgBanner />
          </Banner>
          {
            <>
              {meals.length > 0 && (
                <Carousel title="Meals" content={meals}></Carousel>
              )}
              {desserts.length > 0 && (
                <Carousel title="Desserts" content={desserts}></Carousel>
              )}
              {beverages.length > 0 && (
                <Carousel title="Beverages" content={beverages}></Carousel>
              )}
              {dishes.length <= 0 && <NoResults>No dish found!</NoResults>}
            </>
          }
        </Main>
      </Container>
      <Footer />
    </>
  )
}
