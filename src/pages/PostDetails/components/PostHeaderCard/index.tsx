import { InfoIcons } from '../../../../components/InfoIcons'
import { formatDateDistance } from '../../../../utils/formatter'
import { InternalLink, PostHeaderCardContainer, TextContainer } from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

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
        <InternalLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>voltar</span>
        </InternalLink>
        <ExternalLink url={postURL} text="ver no github" />
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
