import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { StyledLink } from './styles'

interface ExternalLinkProps {
  text: string
  url: string
}

export function ExternalLink({ text, url }: ExternalLinkProps) {
  return (
    <StyledLink href={url} target="_blank">
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </StyledLink>
  )
}
