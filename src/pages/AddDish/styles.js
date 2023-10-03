import styled from 'styled-components'

export const Container = styled.div`
  max-height: 100vh;
`

export const Main = styled.div`
  padding: 9rem 7.625rem 7.25rem;
  height: calc(100vh - 4.8rem);
  overflow-y: auto;

  > h1 {
    margin-top: 1.5rem;
    font: ${({ theme }) => theme.fonts.poppins_400};
  }

  @media (max-width: 1049px) {
    padding: 45.125rem 3.5rem 6.875rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 2rem;
  width: 100%;

  > div {
    display: flex;
    gap: 2rem;

    @media (max-width: 1049px) {
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  @media (max-width: 1049px) {
    > div:nth-child(5) {
      flex-direction: row;
    }
  }

  @media (min-width: 1049px) {
    > div:nth-child(2) div:nth-child(3) {
      width: 22.75rem;
    }

    > div:nth-child(3) > div:nth-child(2) {
      width: 15.6875rem;
    }

    > div:nth-child(5) {
      display: flex;
      justify-content: flex-end;

      button {
        display: flex;
        align-items: flex-end;
        width: max-content;
      }
    }
  }
`

export const ChoiceOfImage = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.dark_800};
  height: 12rem;
  width: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.light_700};
  font: ${({ theme }) => theme.fonts.poppins_300_medium};
  text-align: center;
  padding: 2rem;

  @media (max-width: 1049px) {
    width: 100%;
  }

  > img {
    height: 8rem;
  }

  > div {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    > svg {
      height: 1rem;
      width: 1rem;
    }
  }
`

export const RemoveImage = styled.div`
  cursor: pointer;
`

export const SelectImageBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font: ${({ theme }) => theme.fonts.roboto_small_regular};
  color: ${({ theme }) => theme.colors.light_400};

  > label {
    display: flex;
    gap: 0.5rem;
    width: max-content;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.dark_800};
    cursor: pointer;
    font: ${({ theme }) => theme.fonts.poppins_100};

    @media (max-width: 1049px) {
      width: 100%;
    }

    svg {
      transform: rotate(-90deg);
      height: 1.5rem;
      width: 1.5rem;
    }

    input {
      display: none;
    }
  }
`
export const SelectCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > label {
    font: ${({ theme }) => theme.fonts.roboto_small_regular};
    color: ${({ theme }) => theme.colors.light_400};
    line-height: 1.2;
  }
`
export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > label {
    font: ${({ theme }) => theme.fonts.roboto_small_regular};
    color: ${({ theme }) => theme.colors.light_400};
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    height: max-content;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.dark_800};
  }
`
export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > label {
    font: ${({ theme }) => theme.fonts.roboto_small_regular};
    color: ${({ theme }) => theme.colors.light_400};
    margin-bottom: 1rem;
  }

  > textarea {
    height: 10.75rem;
    resize: none;
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.dark_800};

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`
