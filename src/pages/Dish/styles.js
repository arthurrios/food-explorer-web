import styled from 'styled-components'

export const Container = styled.div`
  max-height: 100vh;
`
export const Main = styled.div`
  padding: 10rem 7.625rem 0;
  height: calc(100vh - 4.8rem);

  @media (max-width: 1049px) {
    padding: 19.125rem 3.5rem 6.875rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: auto;
  }
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

  > div {
    a {
      > button {
        margin-top: 3rem;
        max-width: 8.2rem;
      }
    }
  }

  @media (max-width: 1049px) {
    justify-content: center;
    flex-direction: column;
    margin: 1rem auto 0;
    gap: 1rem;
    max-width: 19.75rem;

    > img {
      max-width: 16.5rem;
    }
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

  @media (max-width: 1049px) {
    text-align: center;

    > h1 {
      font-size: 1.75rem;
    }

    > h2 {
      font-size: 1rem;
    }
  }
`

export const Ingredients = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 1080px) {
    flex-wrap: wrap;
  }

  @media (max-width: 1049px) {
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
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
    justify-content: center;

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 2.375rem;
      padding: 0.75rem;
      gap: 0.5rem;

      > svg {
        font-size: 1.25rem;
      }
    }
  }
`

export const DishControls = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.roboto_big_bold};
  align-items: center;
  gap: 0.875rem;

  @media (max-width: 1049px) {
  }
`
