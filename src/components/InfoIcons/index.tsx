import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IconContainer } from './styles'

interface InfoIconsProps {
  icon: 'github' | 'building' | 'userGroup' | 'calendar' | 'comment'
  text: string
}

export function InfoIcons({ icon, text }: InfoIconsProps) {
  return (
    <IconContainer>
      {icon === 'github' && <FontAwesomeIcon icon={faGithub} />}
      {icon === 'building' && <FontAwesomeIcon icon={faBuilding} />}
      {icon === 'userGroup' && <FontAwesomeIcon icon={faUserGroup} />}
      {icon === 'calendar' && <FontAwesomeIcon icon={faCalendarDay} />}
      {icon === 'comment' && <FontAwesomeIcon icon={faComment} />}
      <span>{text}</span>
    </IconContainer>
  )
}
