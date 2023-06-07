import styled from 'styled-components'

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme['base-label']};
  }
`
