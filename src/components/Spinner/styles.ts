import styled, { keyframes } from 'styled-components'

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`

export const StyledSpinner = styled.div`
  position: absolute;
  z-index: 10;
  inset: 0;
  background-color: ${({ theme }) => theme['base-background']};

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-width: 0.5rem;
    border-color: transparent;
    border-style: solid;
    border-radius: 50%;
  }

  &::after {
    width: 5.5rem;
    height: 5.5rem;
    border-left: 0.3rem solid ${({ theme }) => theme['base-span']};
    border-top: 0.3rem solid ${({ theme }) => theme['base-span']};
    animation: ${rotate} 1s ease-in-out infinite;
  }

  &::before {
    width: 2rem;
    height: 2rem;
    border-left: 0.3rem solid ${({ theme }) => theme['base-span']};
    border-top: 0.3rem solid ${({ theme }) => theme['base-span']};
    animation: ${rotate} 1s linear reverse infinite;
  }
`
