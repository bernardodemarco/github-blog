import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from './styles'

interface CustomLinkProps {
  text: string
  icon: 'external' | 'return'
  iconPosition: 'left' | 'right'
}

export function CustomLink({ icon, text, iconPosition }: CustomLinkProps) {
  return (
    <LinkContainer href="" target="_blank" iconPosition={iconPosition}>
      <span>{text}</span>
      {icon === 'external' ? (
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      ) : (
        <FontAwesomeIcon icon={faChevronLeft} />
      )}
    </LinkContainer>
  )
}
