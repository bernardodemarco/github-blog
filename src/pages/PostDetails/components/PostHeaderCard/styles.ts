import styled from 'styled-components'
import { StyledLink } from '../../../Home/components/ProfileCard/styles'
import { Link } from 'react-router-dom'

export const PostHeaderCardContainer = styled.section`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 10.5rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme['base-profile']};

  & > div:nth-of-type(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  @media screen and (max-width: 45.5rem) {
    height: fit-content;
  }
`

export const InternalLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.blue};
  font-weight: 700;
  font-size: 0.75rem;
  border-bottom: 2px solid ${({ theme }) => theme['base-profile']};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.blue};
  }

  :hover {
    transition: border-color 0.125s ease-in-out;
    border-color: ${({ theme }) => theme.blue};
  }
`

export const ExternalLink = styled(StyledLink)``

export const TextContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    margin-bottom: 0.6875rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  @media screen and (max-width: 33.25rem) {
    h1 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }

    & > div {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
  }
`
