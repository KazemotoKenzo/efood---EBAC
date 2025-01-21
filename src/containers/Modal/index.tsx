import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import Cart from '../../components/Cart'
import { Overlay, CartContainer } from './styles'
import Checkout from '../../components/Checkout'
import Payment from '../../components/Payment'

const Modal = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Cart />
      <Checkout />
      <Payment />
    </CartContainer>
  )
}

export default Modal
