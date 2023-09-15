import { ReactComponent as LogoSymbol } from '../../assets/logo-symbol.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Form, Logo } from './styles'

export function SignUp() {
  return (
    <Container>
      <Logo>
        <LogoSymbol />
        <div>
          <h1>food explorer</h1>
        </div>
      </Logo>
      <Form>
        <h1>Crie sua conta</h1>
        <div>
          <label>Seu nome</label>
          <Input type="text" placeholder="Exemplo: Maria da Silva" />
        </div>
        <div>
          <label>Email</label>
          <Input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" />
        </div>
        <div>
          <label>Senha</label>
          <Input type="password" placeholder="No mínimo 6 caracteres" />
        </div>
        <Button title="Entrar" />
        <Button secondary title="Criar um conta" />
      </Form>
    </Container>
  )
}
