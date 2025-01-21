import { useDispatch } from 'react-redux'
import { close } from '../../store/reducers/cart'
import { Form } from './styles'

const Checkout = () => {
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  return (
    <aside>
      <button className="close" onClick={closeCart} />
      <Form>
        <h4>Entrega</h4>
        <label htmlFor="">Quem ira receber</label>
        <input type="text" />
        <label htmlFor="">Endereço</label>
        <input type="text" />
        <label htmlFor="">Cidade</label>
        <input type="text" />
        <div>
          <div>
            <label htmlFor="">CEP</label>
            <input type="num" />
          </div>
          <div>
            <label htmlFor="">Número</label>
            <input type="num" />
          </div>
        </div>

        <label htmlFor="">Complemento (opcional)</label>
        <input type="text" />

        <button className="btn" type="button">
          Continuar com o pagamento
        </button>
        <button className="btn" type="button">
          Voltar para o carrinho
        </button>
      </Form>
    </aside>
  )
}

export default Checkout
