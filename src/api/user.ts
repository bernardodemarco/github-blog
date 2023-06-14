import { githubAPI } from '../lib/axios'

interface UserRawData {
  name: string
  bio: string
  followers: number
  company: string
  avatar_url: string
  login: string
  html_url: string
}

export interface UserData {
  name: string
  bio: string
  followers: number
  company: string
  imageSrc: string
  username: string
  profileURL: string
}

function mapUserData(userRawData: UserRawData): UserData {
  const {
    name,
    bio,
    followers,
    company,
    avatar_url: imageSrc,
    login: username,
    html_url: profileURL,
  } = userRawData

  return {
    name,
    bio,
    followers,
    company,
    imageSrc,
    username,
    profileURL,
  }
}

export async function getUserData(): Promise<UserData> {
  const { data: userRawData } = await githubAPI.get<UserRawData>(
    '/users/bernardodemarco',
  )
  return mapUserData(userRawData)
}
