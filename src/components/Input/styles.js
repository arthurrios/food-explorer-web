import { styled } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark_900};
  color: ${({ theme }) => theme.colors.light_400};
  border-radius: 8px;
  border: 0;

  > input {
    width: 100%;
    padding: 0.75rem 0.875rem;
    background-color: transparent;
    font: ${({ theme }) => theme.fonts.roboto_small_regular};
    border: none;
    border-radius: 5px;
    z-index: 1;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`
