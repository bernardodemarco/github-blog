import { Post } from '../..'
import { PostCard } from '../PostCard'
import { Grid } from './styles'

interface PostsGridProps {
  posts: Post[]
}

export function PostsGrid({ posts }: PostsGridProps) {
  return (
    <Grid>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Grid>
  )
}
