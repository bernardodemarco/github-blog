import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const Post = styled(ReactMarkdown)`
  padding: 2.25rem 2rem 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.blue};
    font-size: 1rem;
    text-decoration: solid underline ${({ theme }) => theme.blue} 1px;
  }

  a {
    color: ${({ theme }) => theme.blue};
    text-decoration: solid underline ${({ theme }) => theme.blue} 1px;
  }

  ul,
  ol {
    margin-left: 0.875rem;
  }
`
