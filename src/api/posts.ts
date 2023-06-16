import { githubAPI } from '../lib/axios'

interface PostRawData {
  title: string
  body: string
  comments: number
  number: number
  created_at: string
  html_url: string
  user: {
    login: string
  }
}

export interface PostData {
  title: string
  body: string
  comments: number
  postId: number
  createdAt: string
  postURL: string
  owner: string
}

interface PostsRawData {
  items: PostRawData[]
}

function mapPostData(postRawData: PostRawData): PostData {
  const {
    title,
    body,
    comments,
    number: postId,
    created_at: createdAt,
    html_url: postURL,
    user: { login: owner },
  } = postRawData

  return {
    title,
    body,
    comments,
    postId,
    createdAt,
    postURL,
    owner,
  }
}

function mapPostsData(postsRawData: PostsRawData): PostData[] {
  return postsRawData.items.map((post: PostRawData): PostData => {
    return mapPostData(post)
  })
}

export async function getPost(postId: string): Promise<PostData> {
  const { data: postRawData } = await githubAPI.get<PostRawData>(
    `/repos/bernardodemarco/github-blog/issues/${postId}`,
  )
  return mapPostData(postRawData)
}

export async function getPosts(query: string = ''): Promise<PostData[]> {
  const { data: postsRawData } = await githubAPI.get<PostsRawData>(
    `/search/issues?q=${query} repo:bernardodemarco/github-blog label:blog-post`,
  )
  return mapPostsData(postsRawData)
}
