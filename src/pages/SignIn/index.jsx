import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Brand } from '../../components/ui/Brand'
import { Container, Form, Main } from './styles'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Main>
        <Brand login />
        <Form>
          <h1>Login</h1>
          <div>
            <label>Email</label>
            <input
              type="email"
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
          <Button onClick={handleSignIn}>Sign In</Button>
          <Link to="/register">Create account</Link>
        </Form>
      </Main>
    </Container>
  )
}
