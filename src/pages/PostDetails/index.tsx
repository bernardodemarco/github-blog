import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { PostContent } from './components/PostContent'
import { PostHeaderCard } from './components/PostHeaderCard'
import { Spinner } from '../../components/Spinner'

import { PostData, getPost } from '../../api/posts'

export function PostDetails() {
  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState<PostData>({} as PostData)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function getData() {
      if (typeof id === 'string') {
        const postData = await getPost(id)
        setPost(postData)
        setIsLoading(false)
      } else {
        navigate('/')
      }
    }

    getData()
  }, [id, navigate])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <PostHeaderCard
        postURL={post.postURL}
        title={post.title}
        createdAt={post.createdAt}
        owner={post.owner}
        comments={post.comments}
      />
      <PostContent body={post.body} />
    </>
  )
}
