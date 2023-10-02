import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  padding: 0.5rem 1rem;
  width: max-content;
  height: 2rem;
  border: ${({ theme, $isnew }) =>
    $isnew ? `1.5px dashed ${theme.colors.light_600}` : ' none'};
  border-radius: 0.5rem;
  background-color: ${({ theme, $isnew }) =>
    $isnew ? 'transparent' : theme.colors.light_600};

  > input {
    width: ${($isnew) => $isnew && '5rem'};
    background: none;
    border: none;
    outline: none;
  }

  > button {
    color: ${({ theme, $isnew }) =>
      $isnew ? theme.colors.light_600 : theme.colors.light_100};
    display: flex;
    align-items: center;
    background: none;
    border: none;
  }
`
