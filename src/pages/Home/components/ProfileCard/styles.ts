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

    a {
      text-decoration: none;
      text-transform: uppercase;
      color: ${({ theme }) => theme.blue};
      font-weight: 700;
      font-size: 0.75rem;

      svg {
        margin-left: 0.5rem;
        color: ${({ theme }) => theme.blue};
      }

      :hover {
        transition: border-bottom 0.125s ease-in-out;
        border-bottom: 2px solid ${({ theme }) => theme.blue};
      }
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
