import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.3125rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.dark_1000};
  font: ${({ theme }) => theme.fonts.poppins_100};
`
