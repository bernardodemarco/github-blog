import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DataContainer, ProfileCardContainer } from './styles'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img
        src="https://avatars.githubusercontent.com/u/115510880?s=400&u=d1d94e1418745fc994f0e29cc38ec0eb39b7ee5f&v=4"
        alt=""
      />
      <DataContainer>
        <header>
          <h1>Bernardo De Marco Gonçalves</h1>
          <a href="">
            <span>github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>bernardodemarco</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>EJ Pixel</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>21 seguidores</span>
          </div>
        </div>
      </DataContainer>
    </ProfileCardContainer>
  )
}
