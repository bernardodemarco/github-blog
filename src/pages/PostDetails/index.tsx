// import { useParams } from 'react-router-dom'
import { PostContent } from './components/PostContent'
import { PostHeaderCard } from './components/PostHeaderCard'

export function PostDetails() {
  // const params = useParams()
  // console.log(params)

  return (
    <>
      <PostHeaderCard />
      <PostContent />
    </>
  )
}