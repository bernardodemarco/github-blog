import { CustomLink } from '../../../../components/CustomLink'
import { InfoIcons } from '../../../../components/InfoIcons'
import { formatDateDistance } from '../../../../utils/formatter'
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
          iconPosition="left"
          text="voltar"
        />
        <CustomLink
          url={postURL}
          externalLink
          iconPosition="right"
          text="ver no github"
        />
      </div>
      <TextContainer>
        <h1>{title}</h1>
        <div>
          <InfoIcons icon="github" text={owner} />
          <InfoIcons icon="calendar" text={formatDateDistance(createdAt)} />
          <InfoIcons
            icon="comment"
            text={`${comments.toString()} comentários`}
          />
        </div>
      </TextContainer>
    </PostHeaderCardContainer>
  )
}
