import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 19rem;
  min-width: 19rem;
  min-height: 28.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 0.9375rem;
  background-color: ${({ theme }) => theme.colors.dark_200};
  border-radius: 0.5rem;

  > img {
    max-width: 11rem;

    &:hover {
      cursor: pointer;
    }
  }

  > h3 {
    font: ${({ theme }) => theme.fonts.poppins_300_bold};
    color: ${({ theme }) => theme.colors.light_300};
  }

  > p {
    text-align: center;
    font: ${({ theme }) => theme.fonts.roboto_smaller_regular};
    color: ${({ theme }) => theme.colors.light_400};
  }

  > span {
    font: ${({ theme }) => theme.fonts.roboto_biggest_regular};
    color: ${({ theme }) => theme.colors.tints.cake_200};
  }

  @media (max-width: 1049px) {
    width: 13.125rem;
    min-width: 13.125rem;
    min-height: 18.25rem;

    > img {
      max-width: 5.5rem;
    }

    > h3 {
      font: ${({ theme }) => theme.fonts.poppins_100};
    }

    > p {
      display: none;
    }

    > span {
      font: ${({ theme }) => theme.fonts.roboto_small_regular};
    }
  }
`
export const AmmountOfDishes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  > button {
    width: 5.75rem;
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

export const TopRightButton = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.5rem;
  right: 1rem;
  top: 1rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1049px) {
    font-size: 2rem;
  }
`
