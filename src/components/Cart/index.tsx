import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { CartAside, CartList, Item, Prices, Trash } from './styles'
import { RootReducer } from '../../store'

const Cart = () => {
  const { itens } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const priceFormat = (prices: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(prices)
  }

  const getTotalPrice = () => {
    return itens.reduce((t, a) => {
      return t + a.preco
    }, 0)
  }

  return (
    <CartAside>
      <button className="close" onClick={closeCart} />
      <CartList>
        {itens.map((c) => (
          <li key={c.id}>
            <Item src={c.foto} alt={c.nome} />
            <div>
              <h4>{c.nome}</h4>
              <span>{priceFormat(c.preco)}</span>
            </div>
            <Trash onClick={() => removeItem(c.id)} />
          </li>
        ))}
      </CartList>
      <Prices>
        <span>Valor Total</span>
        <span>{priceFormat(getTotalPrice())}</span>
      </Prices>
      <button className="btn">Continar com a entrega</button>
    </CartAside>
  )
}

export default Cart
