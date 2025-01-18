import ProductModel from '../../models/ProductModel'
import { useState } from 'react'

import ProductItem from '../../containers/ProductItem'
import Container from '../../styles/container'
import { Modal, ProductList, RestaurantSection, ModalContent } from './styles'

import close from '../../assets/images/close 1.png'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

type Props = {
  product: ProductModel[]
}

interface ModalState extends ProductModel {
  isVisible: boolean
}

const RestaurantPage = ({ product }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    description: '',
    id: 0,
    image: '',
    title: '',
    prices: 0,
    serves: [0]
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      description: '',
      image: '',
      title: '',
      id: 0,
      prices: 0,
      serves: [0]
    })
  }

  const priceFormat = () => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(modal.prices)
  }

  const family = () => {
    return modal.serves.length > 1
      ? `de ${modal.serves[0]} a ${modal.serves[1]} pessoas`
      : `1 pessoa`
  }

  const dispatch = useDispatch()

  return (
    <>
      <RestaurantSection>
        <Container>
          <ProductList>
            {product.map((p) => (
              <li
                key={p.id}
                onClick={() => {
                  setModal({
                    isVisible: true,
                    description: p.description,
                    image: p.image,
                    title: p.title,
                    id: p.id,
                    prices: p.prices,
                    serves: p.serves
                  })
                }}
              >
                <ProductItem
                  title={p.title}
                  description={p.description}
                  image={p.image}
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
            <img src={modal.image} alt="Pizza Marguerita" />
            <div>
              <h4>{modal.title}</h4>
              <p>{modal.description}</p>

              <span>Serve: {family()}</span>
              <button
                onClick={() => {
                  dispatch(add(modal))
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
