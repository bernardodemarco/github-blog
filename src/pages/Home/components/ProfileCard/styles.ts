import styled from 'styled-components'

export const ProfileCardContainer = styled.section`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 13.25rem;
  padding: 2rem 2rem 2rem 2.5rem;
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

  @media screen and (max-width: 45.5rem) {
    height: fit-content;
    flex-direction: column;
  }
`

export const DataContainer = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5625rem;

    h1 {
      font-size: 1.5rem;
      line-height: 1.3;
    }
  }

  & > p {
    margin-bottom: 1.4375rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  @media screen and (max-width: 33.25rem) {
    & > div {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    header {
      h1 {
        font-size: 1.25rem;
      }
    }

    & > p {
      font-size: 0.875rem;
    }
  }
`
