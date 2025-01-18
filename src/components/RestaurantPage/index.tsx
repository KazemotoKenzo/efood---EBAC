import { useState } from 'react'

import ProductItem from '../../containers/ProductItem'
import Container from '../../styles/container'
import { Modal, ProductList, RestaurantSection, ModalContent } from './styles'

import close from '../../assets/images/close 1.png'

type Props = {
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

type ModalState = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  isVisible: boolean
}

const RestaurantPage = ({ cardapio }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    descricao: '',
    id: 0,
    foto: '',
    nome: '',
    preco: 0,
    porcao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      descricao: '',
      foto: '',
      nome: '',
      id: 0,
      preco: 0,
      porcao: ''
    })
  }

  const priceFormat = () => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(modal.preco)
  }

  const family = () => {
    return modal.porcao.length > 1
      ? `de ${modal.porcao[0]} a ${modal.porcao[1]} pessoas`
      : `1 pessoa`
  }

  return (
    <>
      <RestaurantSection>
        <Container>
          <ProductList>
            {cardapio.map((p) => (
              <li
                key={p.id}
                onClick={() => {
                  setModal({
                    isVisible: true,
                    descricao: p.descricao,
                    foto: p.foto,
                    nome: p.nome,
                    id: p.id,
                    preco: p.preco,
                    porcao: p.porcao
                  })
                }}
              >
                <ProductItem
                  nome={p.nome}
                  descricao={p.descricao}
                  foto={p.foto}
                />
              </li>
            ))}
          </ProductList>
        </Container>
      </RestaurantSection>

      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent>
          <header>
            <img src={close} onClick={closeModal} alt="Fechar" />
          </header>
          <div>
            <img src={modal.foto} alt="Pizza Marguerita" />
            <div>
              <h4>{modal.nome}</h4>
              <p>{modal.descricao}</p>

              <span>Serve: {family()}</span>
              <button
                onClick={() => {
                  closeModal()
                }}
              >
                Adicionar ao carrinho - {priceFormat()}
              </button>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default RestaurantPage
