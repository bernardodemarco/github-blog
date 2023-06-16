import { useEffect, useState } from 'react'
import { PostsGrid } from './components/PostsGrid'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { UserData, getUserData } from '../../api/user'
import { PostData, getPosts } from '../../api/posts'

export function Home() {
  const [userData, setUserData] = useState<UserData>({} as UserData)
  const [posts, setPosts] = useState<PostData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const [userData, allPosts] = await Promise.all([
        getUserData(),
        getPosts(),
      ])

      setUserData(userData)
      setPosts(allPosts)
      setIsLoading(false)
    }

    getData()
  }, [])

  function changePosts(newPosts: PostData[]) {
    setPosts(newPosts)
  }

  if (isLoading) {
    return <h1>is loading</h1>
  }

  return (
    <>
      <ProfileCard
        imageSrc={userData.imageSrc}
        name={userData.name}
        profileURL={userData.profileURL}
        bio={userData.bio}
        username={userData.username}
        company={userData.company}
        followers={userData.followers}
      />
      <SearchForm changePosts={changePosts} numberOfPosts={posts.length} />
      <PostsGrid posts={posts} />
    </>
  )
}
