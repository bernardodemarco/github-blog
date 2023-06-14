import { githubAPI } from '../lib/axios'

interface PostRawData {
  title: string
  body: string
  number: number
  created_at: string
  html_url: string
}

export interface PostData {
  title: string
  body: string
  postId: number
  createdAt: string
  postURL: string
}

interface AllPostsRawData {
  items: PostRawData[]
}

function mapPostData(postRawData: PostRawData): PostData {
  const {
    title,
    body,
    number: postId,
    created_at: createdAt,
    html_url: postURL,
  } = postRawData

  return {
    title,
    body,
    postId,
    createdAt,
    postURL,
  }
}

function mapAllPostsData(allPostsRawData: AllPostsRawData): PostData[] {
  return allPostsRawData.items.map((post: PostRawData): PostData => {
    return mapPostData(post)
  })
}

export async function getPost(postId: number): Promise<PostData> {
  const { data: postRawData } = await githubAPI.get<PostRawData>(
    `/repos/bernardodemarco/github-blog/issues${postId}`,
  )
  return mapPostData(postRawData)
}

export async function getAllPosts(query: string = ''): Promise<PostData[]> {
  const { data: allPostsRawData } = await githubAPI.get<AllPostsRawData>(
    `/search/issues?q=${query} repo:bernardodemarco/github-blog`,
  )
  return mapAllPostsData(allPostsRawData)
}
