import logo from '../../assets/images/logo.png'

import { Description, HeaderBar, HeaderContainer, Logo } from './styles'

const Header = () => (
  <HeaderBar>
    <HeaderContainer>
      <Logo src={logo} alt="Logo efood" />
      <Description>
        Viva experiências gastronômicas no conforto da sua casa
      </Description>
    </HeaderContainer>
  </HeaderBar>
)

export default Header
