import styled from 'styled-components'

export const Container = styled.div`
  max-height: 100vh;
`
export const Main = styled.div`
  padding: 9rem 7.625rem 7.25rem;
  height: calc(100vh - 4.8rem);

  > h1 {
    margin-top: 1.5rem;
    font: ${({ theme }) => theme.fonts.poppins_400};
  }

  > div:last-child {
    display: flex;
    gap: 2rem;
    align-items: flex-end;
    text-align: right;
    justify-content: space-between;
  }

  @media (max-width: 1049px) {
    padding: 10.125rem 3.5rem 6.875rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export const Orders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;
  height: 22rem;
  width: 22rem;
  overflow-y: auto;
`
export const Dish = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: max-content;
  height: 6.5rem;

  > img {
    height: 5rem;
    width: 5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const NameAndValue = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: self-start;
  font: ${({ theme }) => theme.fonts.poppins_200};

  > span {
    margin-top: 0.3rem;
    font: ${({ theme }) => theme.fonts.roboto_smallest_regular};
    color: ${({ theme }) => theme.colors.light_400};
  }
`

export const DishControls = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.roboto_big_bold};
  align-items: center;
  gap: 0.875rem;

  > button {
    display: flex;
    align-items: center;
    height: 1rem;
    width: max-content;
    font: ${({ theme }) => theme.fonts.poppins_050};
  }
`
export const Price = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font: ${({ theme }) => theme.fonts.poppins_200};
`
