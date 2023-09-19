import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  margin-top: 3rem;

  > h3 {
    font: ${({ theme }) => theme.fonts.poppins_400};
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1049px) {
    margin-left: 1.5rem;

    > h3 {
      font: ${({ theme }) => theme.fonts.poppins_150};
    }
  }
`

export const Content = styled.div`
  position: relative;
  gap: 1.75rem;
  display: flex;

  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > div {
    scroll-snap-align: center;
  }
`
export const GradientLeft = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 17.375rem;
  background: ${({ theme }) => theme.colors.gradient_100};
  pointer-events: none;

  @media (max-width: 1049px) {
    width: 10rem;
  }
`
export const GradientRight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: rotate(180deg);
  width: 17.375rem;
  background: ${({ theme }) => theme.colors.gradient_100};
  pointer-events: none;

  @media (max-width: 1049px) {
    width: 10rem;
  }
`
