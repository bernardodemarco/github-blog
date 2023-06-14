import { useEffect, useState } from 'react'
import { PostsGrid } from './components/PostsGrid'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { UserData, getUserData } from '../../api/user'
import { PostData, getAllPosts } from '../../api/posts'

export function Home() {
  const [userData, setUserData] = useState<UserData>({} as UserData)
  const [posts, setPosts] = useState<PostData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const [userData, allPosts] = await Promise.all([
        getUserData(),
        getAllPosts(),
      ])

      setUserData(userData)
      setPosts(allPosts)
      setIsLoading(false)
    }

    getData()
  }, [])

  if (isLoading) {
    return <h1>is loading</h1>
  }

  return (
    <>
      <ProfileCard userData={userData} />
      <SearchForm />
      <PostsGrid posts={posts} />
    </>
  )
}
