import { PostsGrid } from './components/PostsGrid'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'

export function Home() {
  return (
    <>
      <ProfileCard />
      <SearchForm />
      <PostsGrid />
    </>
  )
}
