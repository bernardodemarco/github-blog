import { PostData } from '../../../../api/posts'
import { PostCard } from '../PostCard'
import { Grid } from './styles'

interface PostsGridProps {
  posts: PostData[]
}

export function PostsGrid({ posts }: PostsGridProps) {
  return (
    <Grid>
      {posts.map((post) => {
        return (
          <PostCard
            body={post.body}
            createdAt={post.createdAt}
            postId={post.postId}
            title={post.title}
            key={post.postId}
          />
        )
      })}
    </Grid>
  )
}
