import { Button } from '../../components/Button'
import { Brand } from '../../components/ui/Brand'
import { Container, Form, Main } from './styles'

export function SignIn() {
  return (
    <Container>
      <Main>
        <Brand />
        <Form>
          <h1>Faça login</h1>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" />
          </div>
          <div>
            <label>Senha</label>
            <input type="password" placeholder="No mínimo 6 caracteres" />
          </div>
          <Button title="Entrar" />
          <button className="createBtn">Criar uma conta</button>
        </Form>
      </Main>
    </Container>
  )
}
