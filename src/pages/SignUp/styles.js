import { styled } from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Main = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 1.75rem 0;
  flex-direction: column;
  min-width: 24.875rem;
  max-width: 29.75rem;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    font: ${({ theme }) => theme.fonts.roboto_giant_bold};

    > svg {
      font-size: 2.97rem;
    }
  }

  @media (min-width: 1049px) {
    flex-direction: row;
    gap: 18.75rem;
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
  background-color: ${({ theme }) => theme.colors.dark_700};
  min-width: 29.75rem;
  padding: 4rem;

  @media (max-width: 1049px) {
    background-color: transparent;

    > h1 {
      display: none;
    }
  }

  @media (min-width: 1049px) {
    border-radius: 16px;

    > h1 {
      display: flex;
      justify-content: center;
      font: ${({ theme }) => theme.fonts.poppins_400};
    }
  }

  input {
    display: flex;
    width: 100%;
    padding: 0.75rem 0.875rem;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.dark_900};
    color: ${({ theme }) => theme.colors.light_400};
    border-radius: 8px;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
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
  .loginBtn {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.light_100};
    font-size: 0.875rem;
  }
`
