import { styled } from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 0.75rem 2rem;
  background-color: ${({ theme, $secondary }) =>
    $secondary === 'true' ? 'transparent' : theme.colors.tints.tomato_100};
  color: ${({ theme }) => theme.colors.light_100};

  border: none;
  border-radius: 5px;

  font-size: 0.875rem;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tints.tomato_200};
  }
`
