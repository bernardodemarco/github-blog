import styled from 'styled-components'

export const Grid = styled.div`
  width: 100%;
  margin-bottom: 14rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  justify-items: center;
  gap: 2rem;

  @media screen and (max-width: 27rem) {
    grid-template-columns: 1fr;
  }
`
