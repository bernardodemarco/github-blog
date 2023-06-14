import { useNavigate } from 'react-router-dom'
import { PostCardContainer } from './styles'

interface PostCardProps {
  title: string
  body: string
  postId: number
  createdAt: string
}

export function PostCard({ title, body, postId, createdAt }: PostCardProps) {
  const navigate = useNavigate()

  function handlePostClick() {
    navigate(`/posts/${postId}`)
  }

  return (
    <PostCardContainer onClick={handlePostClick}>
      <header>
        <h2>{title}</h2>
        <span>{createdAt}</span>
      </header>
      <p>{body}</p>
    </PostCardContainer>
  )
}
