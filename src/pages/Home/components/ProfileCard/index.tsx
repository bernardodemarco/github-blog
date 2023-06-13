import { DataContainer, ProfileCardContainer } from './styles'
import { InfoIcons } from '../../../../components/InfoIcons'
import { CustomLink } from '../../../../components/CustomLink'
import { UserData } from '../..'

interface ProfileCardProps {
  userData: UserData
}

export function ProfileCard({ userData }: ProfileCardProps) {
  return (
    <ProfileCardContainer>
      <img
        src="https://avatars.githubusercontent.com/u/115510880?s=400&u=d1d94e1418745fc994f0e29cc38ec0eb39b7ee5f&v=4"
        alt=""
      />
      <DataContainer>
        <header>
          <h1>Bernardo De Marco Gonçalves</h1>
          <CustomLink
            url="https://www.github.com/bernardodemarco"
            externalLink
            iconPosition="right"
            text="github"
          />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div>
          <InfoIcons icon="github" text="bernardodemarco" />
          <InfoIcons icon="building" text="EJ Pixel" />
          <InfoIcons icon="userGroup" text="21 seguidores" />
        </div>
      </DataContainer>
    </ProfileCardContainer>
  )
}
