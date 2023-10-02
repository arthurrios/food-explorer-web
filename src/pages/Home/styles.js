import styled from 'styled-components'
import SectionImage from '../../assets/full-section-image.png'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 7.75rem 0 3rem;
  margin: 0 7.75rem;

  @media (max-width: 1049px) {
    margin: 1.75rem 0 0 1rem;
    padding-top: 7.75rem;
  }
`
export const Main = styled.div`
  /* height: calc(100vh - 15.6rem); */
`

export const Banner = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  justify-content: space-between;

  @media (max-width: 1049px) {
    max-width: 100%;
    margin: 0 1.25rem;
  }
`

export const WrappedImg = styled.div`
  position: relative;
  max-width: 41rem;
  width: 100%;
  height: 26.5rem;
  background-image: url(${SectionImage});
  background-size: cover;
  position: relative;
  left: -6rem;
  bottom: 0rem;

  @media (max-width: 1325px) {
    background-size: 100%;
    background-repeat: no-repeat;
    max-width: 30rem;
    min-width: 30rem;
    height: 21rem;
  }

  @media (max-width: 1049px) {
    background-size: 100%;
    background-repeat: no-repeat;
    max-width: 10rem;
    min-width: 10rem;
    height: 7.31rem;
    left: -1.5rem;
    bottom: 0rem;
  }
`
export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15.75rem;
  position: relative;
  left: -5rem;
  gap: 0.5rem;
  text-align: right;

  h1 {
    font: ${({ theme }) => theme.fonts.poppins_500};
  }

  p {
    font: ${({ theme }) => theme.fonts.roboto_small_regular};
  }

  @media (max-width: 1325px) {
    padding-top: 10rem;
  }

  @media (max-width: 1049px) {
    padding-top: 1.75rem;
    max-width: 12.375rem;
    height: 4rem;
    gap: 0.2rem;
    left: -1.75rem;

    h1 {
      font: ${({ theme }) => theme.fonts.poppins_150};
    }

    p {
      font: ${({ theme }) => theme.fonts.poppins_050};
    }
  }

  @media (max-width: 408px) {
    h1 {
      font-size: 0.875rem;
    }

    p {
      font-size: 0.625rem;
    }
  }
`

export const BgBanner = styled.div`
  width: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.gradient_200};
  height: 16.25rem;
  border-radius: 0.5rem;

  @media (max-width: 1049px) {
    height: 7.5rem;
  }
`

export const NoResults = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  width: 100%;
  padding: 2rem 0;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.dark_500};
  font: ${({ theme }) => theme.fonts.poppins_500};
  color: ${({ theme }) => theme.colors.light_400};
`
