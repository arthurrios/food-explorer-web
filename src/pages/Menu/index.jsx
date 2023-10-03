import { useState, useEffect } from 'react'
import { Container, Header, ItemMenu, Main, SearchList } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'
import { api } from '../../services/api'
import defaultDish from '../../assets/dish.svg'

export function Menu() {
  const { user, signOut } = useAuth()
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role)

  const navigate = useNavigate()

  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState('')
  const [filteredSearch, setFilteredSearch] = useState([])
  const [hasSearchPlaceholder, setHasSearchPlaceholder] = useState(false)

  const queryWidth = 1050
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    setHasSearchPlaceholder(!search)
  }, [search])

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)

      if (window.innerWidth > queryWidth) {
        handleCloseMenu()
        setSearch('')
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?name=${search}`, {
          withCredentials: true,
        })

        setDishes(response.data)
      } catch (error) {
        console.error('There was an error fetching dishes:', error)
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

    const searchResult = filterDishesByNameOrIngredient(search)
    setFilteredSearch(searchResult)
  }, [search])

  function handleCloseMenu() {
    setSearch('')
    navigate(-1)
  }

  function handleDish(id) {
    navigate(`/dish/${id}`)
  }

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  return (
    <Container>
      <Header>
        <AiOutlineClose onClick={handleCloseMenu} />
        Menu
      </Header>
      <Main>
        <Input
          type="text"
          searchPlaceholder={hasSearchPlaceholder}
          aria-label="Search for dishes or ingredients"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        {search && filteredSearch.length > 0 && (
          <SearchList>
            {filteredSearch.map((dish) => (
              <div key={dish.id} onClick={() => handleDish(dish.id)}>
                {dish.image ? (
                  <img src={`${api.defaults.baseURL}/files/${dish.image}`} />
                ) : (
                  <img src={defaultDish} />
                )}
                <span>{dish.name}</span>
              </div>
            ))}
          </SearchList>
        )}

        {isAdmin ? (
          <Link to="/add-dish">
            <ItemMenu>Add Dish</ItemMenu>
          </Link>
        ) : (
          <Link to="/order">
            <ItemMenu>My Order</ItemMenu>
          </Link>
        )}

        <ItemMenu onClick={handleSignOut}>Sair</ItemMenu>
      </Main>
      <Footer />
    </Container>
  )
}
