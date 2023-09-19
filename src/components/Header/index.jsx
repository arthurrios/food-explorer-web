import { Container, OrderReceipt } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import { PiReceipt, PiSignOut } from 'react-icons/pi'
import { AiOutlineMenu } from 'react-icons/ai'
import { Brand } from '../ui/Brand'
import { useState, useEffect } from 'react'

export function Header() {
  const isAdmin = false

  const [search, setSearch] = useState('')
  const [hasSearchPlaceholder, setHasSearchPlaceholder] = useState(false)

  const queryWidth = 1050
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

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
        <button className="menuBtn">
          <AiOutlineMenu />
        </button>
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
          <Button className="newDishBtn">Novo Prato</Button>
        ) : (
          <Button className="orderLgBtn">
            <PiReceipt />
            {`Pedidos (0)`}
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
        <button className="logoutBtn">
          <PiSignOut />
        </button>
      )}
    </Container>
  )
}
