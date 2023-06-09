import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme['base-background']};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem / 1.6 'Nunito', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme['base-title']};
    font-weight: 700;
  }

  :focus {
    outline: 0;
    box-shadow: none;
  }

  ::selection {
    background-color: ${({ theme }) => theme['base-label']};
  }

  body::-webkit-scrollbar {
    width: 0.25rem;
  }

  body::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme['base-background']};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['base-span']};
  }

  @supports (scrollbar-color: ${({ theme }) => theme['base-span']} ${({
  theme,
}) => theme['base-background']}) {
    body {
      scrollbar-color: ${({ theme }) => theme['base-span']} ${({ theme }) =>
  theme['base-background']};
      scrollbar-width: auto;
    }
  }
`
