import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  font: ${({ theme }) => theme.fonts.roboto_small_regular};

  label {
    color: ${({ theme }) => theme.colors.light_400};
  }

  input {
    height: 3rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.dark_800};
    border: none;
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`
