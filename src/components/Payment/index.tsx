import { Form, CVV } from './styles'

const Payment = () => {
  return (
    <aside>
      <Form>
        <h4>Pagamento - Valor a pagar R$190,90</h4>
        <label htmlFor="">Nome do Cartão</label>
        <input type="text" />
        <div>
          <div>
            <label htmlFor="">Número do Cartão</label>
            <input type="number" />
          </div>
          <CVV>
            <label htmlFor="">CVV</label>
            <input type="number" />
          </CVV>
        </div>
        <div>
          <div>
            <label htmlFor="">Mês de vencimento</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">Ano de vencimento</label>
            <input type="number" />
          </div>
        </div>

        <button className="btn" type="button">
          Finalizar pagamento
        </button>
        <button className="btn" type="button">
          Voltar para a edição de endereço
        </button>
      </Form>
    </aside>
  )
}

export default Payment
