import {
  InternalLink,
  PostHeaderCardContainer,
  TextContainer,
  ExternalLink,
} from './styles'

import { InfoIcons } from '../../../../components/InfoIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

import { formatDateDistance } from '../../../../utils/formatter'

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
        <ExternalLink href={postURL} target="_blank">
          <span>ver no github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </ExternalLink>
      </div>
      <TextContainer>
        <h1>{title}</h1>
        <div>
          <InfoIcons icon="github" text={owner} />
          <InfoIcons icon="calendar" text={formatDateDistance(createdAt)} />
          <InfoIcons
            icon="comment"
            text={`${comments.toString()} ${
              comments === 1 ? 'comentário' : 'comentários'
            }`}
          />
        </div>
      </TextContainer>
    </PostHeaderCardContainer>
  )
}
