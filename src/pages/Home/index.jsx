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
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

export function Home() {
  const [meals, setMeals] = useState([])
  const [beverages, setBeverages] = useState([])
  const [desserts, setDesserts] = useState([])

  const [dishes, setDishes] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?itemSearch=${search}`)

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

  return (
    <>
      <Container>
        <Header />
        <Main>
          <Banner>
            <WrappedImg />
            <Slogan>
              <h1>Unmatched flavors!</h1>
              <p>Feel the care of the preparation with selected ingredients</p>
            </Slogan>
            <BgBanner />
          </Banner>
          {meals.length > 0 && (
            <Carousel title="Meals" content={meals}></Carousel>
          )}
          {beverages.length > 0 && (
            <Carousel title="Beverages" content={beverages}></Carousel>
          )}
          {desserts.length > 0 && (
            <Carousel title="Desserts" content={desserts}></Carousel>
          )}
          {dishes.length <= 0 && <NoResults>No dish found!</NoResults>}
        </Main>
      </Container>
      <Footer />
    </>
  )
}
