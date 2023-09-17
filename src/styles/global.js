import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark_400};
    color: ${({ theme }) => theme.colors.light_300};
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
  }

  input, textarea, label {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.light_300};
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
`
