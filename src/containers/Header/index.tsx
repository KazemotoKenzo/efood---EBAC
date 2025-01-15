import logo from '../../assets/images/logo.png'

import Logo from '../../styles/logo'
import { HeaderBar, HeaderContainer, Left, Right } from './styles'

const Header = () => (
  <HeaderBar>
    <HeaderContainer>
      <Left>Retaurantes</Left>
      <Logo src={logo} />
      <Right>0 produto(s) no carrinho</Right>
    </HeaderContainer>
  </HeaderBar>
)

export default Header
