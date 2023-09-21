import { useState, useEffect } from 'react'
import { Container, Header, ItemMenu, Main } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'
import { useNavigate, Link } from 'react-router-dom'

export function Menu() {
  const isAdmin = false

  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [hasSearchPlaceholder, setHasSearchPlaceholder] = useState(false)

  useEffect(() => {
    setHasSearchPlaceholder(!search)
  }, [search])

  function handleCloseMenu() {
    setSearch('')
    navigate(-1)
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
        <Link to="/orders">
          {isAdmin ? (
            <ItemMenu>Pedidos</ItemMenu>
          ) : (
            <ItemMenu>Meus pedidos</ItemMenu>
          )}
          {isAdmin ? (
            <Link to="/add">
              <ItemMenu>Novo prato</ItemMenu>
            </Link>
          ) : (
            <Link to="/favorites">
              <ItemMenu>Favoritos</ItemMenu>
            </Link>
          )}
        </Link>
        <ItemMenu>Sair</ItemMenu>
      </Main>
      <Footer />
    </Container>
  )
}
