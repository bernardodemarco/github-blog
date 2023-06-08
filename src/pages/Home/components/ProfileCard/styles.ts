import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 13.25rem;
  padding: 2rem 2rem 2rem 1.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme['base-profile']};

  display: flex;
  gap: 2rem;
  align-items: center;

  img {
    height: 9.25rem;
    aspect-ratio: 1;
    object-fit: contain;
    border-radius: 8px;
  }
`

export const DataContainer = styled.section`
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;

    h1 {
      font-size: 1.5rem;
    }
  }

  & > p {
    margin-bottom: 1.5rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`
