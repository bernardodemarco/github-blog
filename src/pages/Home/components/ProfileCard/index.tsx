import { DataContainer, ProfileCardContainer, StyledLink } from './styles'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { InfoIcons } from '../../../../components/InfoIcons'
import { UserData } from '../../../../api/user'

interface ProfileCardProps {
  userData: UserData
}

export function ProfileCard({ userData }: ProfileCardProps) {
  return (
    <ProfileCardContainer>
      <img src={userData.imageSrc} alt="" />
      <DataContainer>
        <header>
          <h1>{userData.name}</h1>
          <StyledLink href={userData.profileURL} target="_blank">
            <span>github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </StyledLink>
        </header>
        <p>{userData.bio}</p>
        <div>
          <InfoIcons icon="github" text={userData.username} />
          <InfoIcons icon="building" text={userData.company} />
          <InfoIcons
            icon="userGroup"
            text={`${userData.followers.toString()} seguidores`}
          />
        </div>
      </DataContainer>
    </ProfileCardContainer>
  )
}
