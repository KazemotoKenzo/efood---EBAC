import Container from '../../styles/container'
import RestaurantItem from '../../containers/RestaurantItem'
import { RestList, RestSection } from './styles'

const Restaurants = () => {
  return (
    <RestSection>
      <Container>
        <RestList>
          <li>
            <RestaurantItem />
          </li>
          <li>
            <RestaurantItem />
          </li>
          <li>
            <RestaurantItem />
          </li>
          <li>
            <RestaurantItem />
          </li>
          <li>
            <RestaurantItem />
          </li>
          <li>
            <RestaurantItem />
          </li>
        </RestList>
      </Container>
    </RestSection>
  )
}

export default Restaurants
