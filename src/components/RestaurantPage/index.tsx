import ProductItem from '../../containers/ProductItem'
import Container from '../../styles/container'
import { ProductList, RestaurantSection } from './styles'

const RestaurantPage = () => {
  return (
    <RestaurantSection>
      <Container>
        <ProductList>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
          <li>
            <ProductItem />
          </li>
        </ProductList>
      </Container>
    </RestaurantSection>
  )
}

export default RestaurantPage
