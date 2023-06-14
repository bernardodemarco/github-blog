import { CustomLink } from '../../../../components/CustomLink'
import { InfoIcons } from '../../../../components/InfoIcons'
import { PostHeaderCardContainer, TextContainer } from './styles'

interface PostHeaderProps {
  postURL: string
  title: string
  createdAt: string
  owner: string
  comments: number
}

export function PostHeaderCard({
  postURL,
  title,
  createdAt,
  owner,
  comments,
}: PostHeaderProps) {
  return (
    <PostHeaderCardContainer>
      <div>
        <CustomLink
          url="/"
          externalLink={false}
          text="voltar"
          iconPosition="left"
        />
        <CustomLink
          url={postURL}
          externalLink
          text="ver no github"
          iconPosition="right"
        />
      </div>
      <TextContainer>
        <h1>{title}</h1>
        <div>
          <InfoIcons icon="github" text={owner} />
          <InfoIcons icon="calendar" text={createdAt} />
          <InfoIcons icon="comment" text={comments.toString()} />
        </div>
      </TextContainer>
    </PostHeaderCardContainer>
  )
}
