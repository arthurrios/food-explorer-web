import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4.8125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.dark_600};
  padding: 1.5rem 7.6875rem;

  > p {
    font: ${({ theme }) => theme.fonts.roboto_smaller_regular};
    color: ${({ theme }) => theme.colors.light_200};
  }

  @media (max-width: 767px) {
    padding: 1.5rem 1.75rem;
    gap: 0.5rem;

    > p {
      font: ${({ theme }) => theme.fonts.roboto_smallest_regular};
    }
  }
`
export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: ${({ theme }) => theme.colors.light_700};
  font: ${({ theme }) => theme.fonts.roboto_bigger_bold};

  @media (max-width: 767px) {
    font-size: 0.9rem;
    min-width: 7.25rem;
    max-width: 7.25rem;
  }
`
