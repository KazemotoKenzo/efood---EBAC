import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../store/reducers/cart'

import Logo from '../../styles/logo'
import { HeaderBar, HeaderContainer, Left, Right } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.cart.itens)
  const dispatch = useDispatch()

  return (
    <HeaderBar>
      <HeaderContainer>
        <Left onClick={() => dispatch(reset())} to="/">
          Retaurantes
        </Left>
        <Logo src={logo} />
        <Right to="#">{itens.length} produto(s) no carrinho</Right>
      </HeaderContainer>
    </HeaderBar>
  )
}

export default Header
