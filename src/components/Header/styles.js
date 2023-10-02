import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.light_100};
  background-color: ${({ theme }) => theme.colors.dark_600};
  padding: 1.5rem 7.75rem;

  > div:nth-child(1) {
    display: flex;
    gap: 2.5rem;
    align-items: center;
    width: 58.5rem;
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  @media (max-width: 1049px) {
    padding: 3.5rem 1.75rem 1.5rem;
  }
  .menuBtn {
    background: none;
    border: none;
    display: flex;
    color: ${({ theme }) => theme.colors.light_100};

    font-size: 1.5rem;
    min-width: 1.5rem;
    max-width: 1.5rem;
  }

  input {
    text-align: center;
    height: 3rem;
  }

  .newDishBtn {
    max-width: 13.5rem;
    min-width: 13.5rem;
    height: 3rem;
  }

  .orderLgBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 13.5rem;
    min-width: 13.5rem;
    height: 3rem;
    gap: 0.5rem;

    > svg {
      font-size: 1.625rem;
      min-width: 1.625rem;
      max-width: 1.625rem;
    }
  }

  .logoutBtn {
    background: transparent;
    border: none;
    width: 2rem;
    height: 2rem;

    > svg {
      color: ${({ theme }) => theme.colors.light_100};
      font-size: 2rem;
      min-width: 2rem;
      max-width: 2rem;
    }
  }
`
export const OrderReceipt = styled.div`
  position: relative;
  display: flex;
  margin-top: 0.3rem;

  > svg {
    font-size: 2rem;
    min-width: 2rem;
    max-width: 2rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -0.2rem;
    right: -0.3rem;
    font: ${({ theme }) => theme.fonts.poppins_100};
    background-color: ${({ theme }) => theme.colors.tints.tomato_100};
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
  }
`
