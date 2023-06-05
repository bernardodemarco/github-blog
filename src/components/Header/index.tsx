import headerBackground from './../../assets/header-background.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerBackground} alt="" />
    </HeaderContainer>
  )
}
