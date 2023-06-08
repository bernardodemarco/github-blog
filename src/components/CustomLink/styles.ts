import styled from 'styled-components'

interface LinkContainerProps {
  iconPosition: 'left' | 'right'
}

export const LinkContainer = styled.a<LinkContainerProps>`
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
    order: ${({ iconPosition }) =>
      iconPosition === 'left' ? '-1' : 'initial'};
    color: ${({ theme }) => theme.blue};
  }

  :hover {
    transition: border-color 0.125s ease-in-out;
    border-color: ${({ theme }) => theme.blue};
  }
`
