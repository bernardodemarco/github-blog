import { useNavigate } from 'react-router-dom'
import { PostCardContainer } from './styles'

export function PostCard() {
  const navigate = useNavigate()
  const id = 1

  function handlePostClick() {
    navigate(`/posts/${id}`)
  }

  return (
    <PostCardContainer onClick={handlePostClick}>
      <header>
        <h2>JavaScript data types and data structures</h2>
        <span>Há 7 meses</span>
      </header>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in Programming languages all have
        built-in data structures, but these often differ from one language to
        another. This article attempts to list the built-in data structures
        available in
      </p>
    </PostCardContainer>
  )
}
