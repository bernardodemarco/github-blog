import styled from 'styled-components'

export const FormContainer = styled.section`
  width: 100%;
  margin: 4.5rem 0 3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.125rem;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  form {
    width: 100%;

    input {
      width: 100%;
      border: 1px solid ${({ theme }) => theme['base-border']};
      border-radius: 6px;
      padding: 0.75rem 1rem;

      background-color: ${({ theme }) => theme['base-input']};
      color: ${({ theme }) => theme['base-text']};

      ::placeholder {
        color: ${({ theme }) => theme['base-label']};
      }

      :focus {
        transition: border-color 0.125s ease-in-out;
        border-color: ${({ theme }) => theme.blue};
      }
    }
  }
`
