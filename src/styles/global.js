import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark_400};
    color: ${({ theme }) => theme.colors.light_100};
    --webkit-font-smoothing: antialised;
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

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.dark_1000};
    border-radius: 0.3125rem;
  }

  * {
        scrollbar-color: ${({ theme }) => theme.colors.dark_1000} transparent;
    }

    *::-moz-scrollbar-thumb {
        background-color: red;
        border-radius: 0.3125rem;
    }

    ::-ms-scrollbar {
        width: 0.3125rem;
    }

    ::-ms-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.dark_1000};
        border-radius: 0.5rem;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
`
