import styled from 'styled-components'

export const Grid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(416px, 1fr));
  justify-items: center;
  gap: 2rem;

  @media screen and (max-width: 26rem) {
    grid-template-columns: 1fr;
  }
`
