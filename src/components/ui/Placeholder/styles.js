import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  z-index: 0;
  min-width: 17.25rem;
  width: 100%;
  height: 3rem;
  color: ${({ theme }) => theme.colors.light_500};
  background: transparent;
  border: 0;

  @media (max-width: 1049px) {
    justify-content: flex-start;
    padding-left: 0.875rem;
  }

  svg {
    font-size: 1.22rem;
    color: ${({ theme }) => theme.colors.light_400};
    margin-right: 0.875rem;
  }

  span {
    font: ${({ theme }) => theme.fonts.roboto_small_regular};
  }
`
