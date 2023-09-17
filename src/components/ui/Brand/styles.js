import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: leftToRight 0.3s ease-in;

  @media (max-width: 1049px) {
    flex-direction: row;
    animation: topToBottom 0.3s ease-in;
  }
`

export const Logo = styled.div`
  display: flex;
  width: max-content;
  gap: 0.5rem;
  font: ${({ theme }) => theme.fonts.roboto_bigger_bold};

  svg {
    align-self: center;
    font-size: 1.56rem;
    color: ${({ theme }) => theme.colors.tints.cake_100};
  }

  @media (max-width: 1049px) {
    min-width: max-content;
    min-height: 1.625rem;
    max-height: 1.625rem;
  }
`
export const Admin = styled.div`
  font: ${({ theme }) => theme.fonts.roboto_smallest_regular};
  color: ${({ theme }) => theme.colors.tints.cake_200};
  margin-top: -0.2rem;
  text-align: right;
  width: 100%;

  @media (max-width: 1049px) {
    margin: 0.2rem 0 0 0.5rem;
  }
`
