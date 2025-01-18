import Logo from '../../styles/logo'
import { HeaderBar, HeaderContainer, Left, Right } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderBar>
      <HeaderContainer>
        <Left to="/">Retaurantes</Left>
        <Logo src={logo} />
        <Right to="#">0 produto(s) no carrinho</Right>
      </HeaderContainer>
    </HeaderBar>
  )
}

export default Header
