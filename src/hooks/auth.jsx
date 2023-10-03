import { useState, createContext, useContext, useEffect } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        '/sessions',
        { email, password },
        { withCredentials: true },
      )

      const { user, role } = response.data
      let order = {}

      localStorage.setItem('@fexplorer:user', JSON.stringify(user))

      if (role !== 'admin') {
        const storageOrder = JSON.parse(
          localStorage.getItem('@fexplorer:order'),
        )

        if (storageOrder && storageOrder.user_id === user.id) {
          order = storageOrder
        } else {
          order = {
            user_id: user.id,
            dishes: [],
          }

          localStorage.setItem('@fexplorer:order', JSON.stringify(order))
        }
      }

      setData({ user })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Could not sign in')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@fexplorer:user')

    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem('@fexplorer:user')
    const order = localStorage.getItem('@fexplorer:order')

    if (user) {
      setData({
        user: JSON.parse(user),
        order: JSON.parse(order),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        order: data.order,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
