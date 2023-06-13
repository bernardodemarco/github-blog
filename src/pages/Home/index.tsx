import { useEffect, useState } from 'react'
import { PostsGrid } from './components/PostsGrid'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { githubAPI } from '../../lib/axios'

export interface UserData {
  name: string
  avatar_url: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

export interface Post {
  title: string
  body: string
  created_at: string
  html_url: string
  number: number
}

interface PostData {
  items: Post[]
}

// CHANGE NAMES
// REVIEW CODE

export function Home() {
  const [userData, setUserData] = useState<UserData>({} as UserData)
  const [posts, setPosts] = useState<Post[]>([])

  function getUserData() {
    return githubAPI.get<UserData>('/users/bernardodemarco')
  }

  function getPostsData(query: string = '') {
    return githubAPI.get<PostData>(
      `/search/issues?q=${query} repo:bernardodemarco/github-blog`,
    )
  }

  useEffect(() => {
    async function getData() {
      const responses = await Promise.all([
        await getUserData(),
        await getPostsData(),
      ])
      const [userDataResponse, postsDataResponse] = responses

      setUserData(userDataResponse.data)
      setPosts(postsDataResponse.data.items)
    }

    getData()
  }, [])

  return (
    <>
      <ProfileCard userData={userData} />
      <SearchForm />
      <PostsGrid posts={posts} />
    </>
  )
}
