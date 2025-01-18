import ProductModel from '../../models/ProductModel'
import { useState } from 'react'

import ProductItem from '../../containers/ProductItem'
import Container from '../../styles/container'
import { Modal, ProductList, RestaurantSection, ModalContent } from './styles'

import close from '../../assets/images/close 1.png'

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
    title: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      description: '',
      image: '',
      title: '',
      id: 0
    })
  }

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
                    id: p.id
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

              <span>Serve: de 2 a 3 pessoas</span>
              <button>Adicionar ao carrinho - R$ 60,90</button>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default RestaurantPage
