import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 7rem 4rem 0;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;

  @media (min-width: 1000px) {
    margin-top: -5rem;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
  }

  svg {
    width: 2.7rem;
    height: 2.7rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  margin-top: 5rem;
  gap: 2rem;
  max-width: 20rem;

  @media (max-width: 1000px) {
    > h1 {
      display: none;
    }
  }

  @media (min-width: 1000px) {
    min-width: 29.75rem;
    background-color: ${({ theme }) => theme.colors.dark_700};
    padding: 4rem;
    margin-top: 0;
    border-radius: 16px;

    > h1 {
      display: flex;
      justify-content: center;

      font-weight: 500;
    }
  }

  > div {
    display: flex;
    flex-direction: column;

    label {
      color: ${({ theme }) => theme.colors.light_400};
      margin-bottom: 0.5rem;
    }
  }
`
