import { Container, OrderReceipt } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import { PiReceipt, PiSignOut } from 'react-icons/pi'
import { AiOutlineMenu } from 'react-icons/ai'
import { Brand } from '../ui/Brand'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

export function Header() {
  const { user, signOut } = useAuth()
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role)

  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [hasSearchPlaceholder, setHasSearchPlaceholder] = useState(false)

  const queryWidth = 1050
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function handleNewDish() {
    navigate('/add-dish')
  }

  function handleOrder() {
    navigate('/order')
  }

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  useEffect(() => {
    setHasSearchPlaceholder(!search)
  }, [search])

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)

      if (window.innerWidth < queryWidth) {
        setSearch('')
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      {windowWidth < queryWidth && (
        <Link to="/menu">
          <AiOutlineMenu className="menuBtn" />
        </Link>
      )}
      <Brand className="brand" isAdmin={isAdmin} />

      {windowWidth >= queryWidth && (
        <Input
          type="text"
          searchPlaceholder={hasSearchPlaceholder}
          aria-label="Search for dishes or ingredients"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      )}
      {windowWidth >= queryWidth ? (
        isAdmin ? (
          <Button onClick={handleNewDish} className="newDishBtn">
            Novo Prato
          </Button>
        ) : (
          <Button onClick={handleOrder} className="orderLgBtn">
            <PiReceipt />
            {`Orders (0)`}
          </Button>
        )
      ) : isAdmin ? (
        <OrderReceipt style={{ visibility: 'hidden' }}>
          <PiReceipt />
          <span>0</span>
        </OrderReceipt>
      ) : (
        <OrderReceipt>
          <PiReceipt />
          <span>0</span>
        </OrderReceipt>
      )}
      {windowWidth >= queryWidth && (
        <button onClick={handleSignOut} className="logoutBtn">
          <PiSignOut />
        </button>
      )}
    </Container>
  )
}
