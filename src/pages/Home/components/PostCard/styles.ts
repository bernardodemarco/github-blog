import styled from 'styled-components'

export const PostCardContainer = styled.article`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  border: 2px solid ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  background-color: ${({ theme }) => theme['base-post']};
  cursor: pointer;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: self-start;
    gap: 1rem;

    h2 {
      font-size: 1.25rem;
      flex: 1;
    }

    span {
      width: max-content;

      color: ${({ theme }) => theme['base-span']};
      font-size: 0.875rem;
    }
  }

  p {
    margin-top: 1.25rem;
    max-height: calc(1.6 * 1rem * 4); // line-height * font-size * lines

    color: ${({ theme }) => theme['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;

    -webkit-line-clamp: 4; // limits the content to 4 lines
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  &:hover {
    transition: border-color 0.125s ease-in-out;
    border-color: ${({ theme }) => theme['base-border']};
  }
`
