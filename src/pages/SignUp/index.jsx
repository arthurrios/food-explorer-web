import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Brand } from '../../components/ui/Brand'
import { Container, Form, Main } from './styles'
import { useState } from 'react'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Please fill all required fields')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('User successfully signed up!')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Not able to sign up.')
          console.log(error)
        }
      })
  }

  return (
    <Container>
      <Main>
        <Brand />
        <Form>
          <h1>Sign Up</h1>
          <div>
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Ex: John Hunt"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Ex: example@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="At least 6 characters"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button onClick={handleSignUp}>Sign Up</Button>
          <Link to="/">Already have an account</Link>
        </Form>
      </Main>
    </Container>
  )
}
