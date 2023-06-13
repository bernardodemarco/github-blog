import { CustomLink } from '../../../../components/CustomLink'
import { InfoIcons } from '../../../../components/InfoIcons'
import { PostHeaderCardContainer, TextContainer } from './styles'

export function PostHeaderCard() {
  return (
    <PostHeaderCardContainer>
      <div>
        <CustomLink
          url="/"
          externalLink={false}
          text="voltar"
          iconPosition="left"
        />
        <CustomLink
          url="https://www.github.com/bernardodemarco/coffee-delivery"
          externalLink
          text="ver no github"
          iconPosition="right"
        />
      </div>
      <TextContainer>
        <h1>JavaScript data types and data structures</h1>
        <div>
          <InfoIcons icon="github" text="bernardodemarco" />
          <InfoIcons icon="calendar" text="Há 1 dia" />
          <InfoIcons icon="comment" text="5 comentários" />
        </div>
      </TextContainer>
    </PostHeaderCardContainer>
  )
}
