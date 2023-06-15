import { DataContainer, ProfileCardContainer } from './styles'
import { InfoIcons } from '../../../../components/InfoIcons'
import { CustomLink } from '../../../../components/CustomLink'
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
          <CustomLink
            url={userData.profileURL}
            externalLink
            iconPosition="right"
            text="github"
          />
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
