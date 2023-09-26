import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.dark_800};
  border-radius: 0.5rem;

  > svg {
    position: absolute;
    right: 1rem;
    top: 0.75rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${({ theme }) => theme.colors.light_400};
  }
`

export const Selector = styled.select`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.dark_800};
  border-radius: 0.5rem;
  padding: 1rem;
  font: ${({ theme }) => theme.fonts.roboto_small_regular};
  color: ${({ theme }) => theme.colors.light_400};
  outline: none;
  border: none;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`
