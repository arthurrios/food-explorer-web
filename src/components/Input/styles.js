import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.75rem 0.875rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark_900};
  color: ${({ theme }) => theme.colors.light_400};
  border-radius: 8px;

  input {
    width: inherit;
    border: 0;
    background-color: ${({ theme }) => theme.colors.dark_900};

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`
