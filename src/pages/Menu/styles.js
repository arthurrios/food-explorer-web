import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark_400};
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 7.125rem;
  background-color: ${({ theme }) => theme.colors.dark_700};
  padding: 3.5rem 1.75rem 1.5rem;
  font: ${({ theme }) => theme.fonts.roboto_big_regular};

  > svg {
    font-size: 1.25rem;
    max-width: 1.25rem;
    min-width: 1.25rem;
  }
`

export const Main = styled.div`
  height: 100%;
  padding: 2.25rem 1.75rem 0.75rem;

  > div {
    margin-bottom: 2.25rem;
  }
`

export const SearchList = styled.div`
  position: absolute;
  top: 13rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: calc(100% - 3.5rem);
  font: ${({ theme }) => theme.fonts.roboto_small_regular};
  color: ${({ theme }) => theme.colors.light_400};
  background-color: ${({ theme }) => theme.colors.dark_600};
  border-radius: 0.5rem;
  padding: 1rem;

  img {
    height: 3rem;
    width: 3rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.3s;
    border-radius: 0.5rem;

    &:hover {
      cursor: pointer;
      transform: scale(1.03);
      background-color: ${({ theme }) => theme.colors.dark_900};
    }
  }
`

export const ItemMenu = styled.div`
  text-decoration: none;
  padding: 0.625rem;
  color: ${({ theme }) => theme.colors.light_300};
  font: ${({ theme }) => theme.fonts.poppins_300_light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark_1000};
`
