import { DataContainer, ProfileCardContainer, StyledLink } from './styles'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { InfoIcons } from '../../../../components/InfoIcons'

interface ProfileCardProps {
  imageSrc: string
  name: string
  profileURL: string
  bio: string
  username: string
  company: string
  followers: number
}

export function ProfileCard({
  imageSrc,
  name,
  profileURL,
  bio,
  username,
  company,
  followers,
}: ProfileCardProps) {
  return (
    <ProfileCardContainer>
      <img src={imageSrc} alt="" />
      <DataContainer>
        <header>
          <h1>{name}</h1>
          <StyledLink href={profileURL} target="_blank">
            <span>github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </StyledLink>
        </header>
        <p>{bio}</p>
        <div>
          <InfoIcons icon="github" text={username} />
          <InfoIcons icon="building" text={company} />
          <InfoIcons
            icon="userGroup"
            text={`${followers.toString()} seguidores`}
          />
        </div>
      </DataContainer>
    </ProfileCardContainer>
  )
}
