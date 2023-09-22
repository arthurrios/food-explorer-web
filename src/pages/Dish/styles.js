import styled from 'styled-components'

export const Container = styled.div`
  max-height: 100vh;
`
export const Main = styled.div`
  padding: 8rem 7.625rem 0;
  height: calc(100vh - 5rem);
`
export const DishItem = styled.div`
  margin-top: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;

  > img {
    max-width: 24.3rem;
  }
`

export const DishInfo = styled.div`
  max-width: 42.94rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > h1 {
    font: ${({ theme }) => theme.fonts.poppins_500};
  }

  > h2 {
    font: ${({ theme }) => theme.fonts.poppins_300_regular};
  }
`

export const Ingredients = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const AmmountOfDishes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  gap: 1rem;
  width: 100%;

  > button {
    max-width: 10.2rem;
    height: 3rem;
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: 1049px) {
    flex-direction: column;

    > button {
      width: 100%;
      height: 2rem;
      padding: 0;
    }
  }
`

export const DishControls = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.roboto_big_bold};
  align-items: center;
  gap: 0.875rem;

  @media (max-width: 1049px) {
    > span {
      font: ${({ theme }) => theme.fonts.roboto_small_regular};
    }
  }
`
