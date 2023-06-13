import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { ExternalLink, InternalLink } from './styles'

interface CustomLinkProps {
  text: string
  iconPosition: 'left' | 'right'
  externalLink: boolean
  url: string
}

export function CustomLink({
  text,
  iconPosition,
  externalLink,
  url,
}: CustomLinkProps) {
  return (
    <>
      {externalLink ? (
        <ExternalLink href={url} target="_blank" iconPosition={iconPosition}>
          <span>{text}</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </ExternalLink>
      ) : (
        <InternalLink to={url} iconPosition={iconPosition}>
          <span>{text}</span>
          <FontAwesomeIcon icon={faChevronLeft} />
        </InternalLink>
      )}
    </>
  )
}
