import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.poppins_300_bold};
  cursor: pointer;

  > svg {
    font-size: 2rem;
    min-width: 2rem;
    max-width: 2rem;
  }
`
