import { Button } from '../../components/Button'
import { Brand } from '../../components/ui/Brand'
import { Container, Form, Main } from './styles'

export function SignUp() {
  return (
    <Container>
      <Main>
        <Brand />
        <Form>
          <h1>Crie sua conta</h1>
          <div>
            <label>Seu nome</label>
            <input type="text" placeholder="Exemplo: Maria da Silva" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" />
          </div>
          <div>
            <label>Senha</label>
            <input type="password" placeholder="No mínimo 6 caracteres" />
          </div>
          <Button title="Entrar" />
          <button className="loginBtn">Já tenho uma conta</button>
        </Form>
      </Main>
    </Container>
  )
}
