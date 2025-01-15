import RestaurantModel from '../../models/RestaurantModel'

import Container from '../../styles/container'
import RestaurantItem from '../../containers/RestaurantItem'
import { RestList, RestSection } from './styles'

type Props = {
  _restaurant: RestaurantModel[]
}

const Restaurants = ({ _restaurant }: Props) => {
  return (
    <RestSection>
      <Container>
        <RestList>
          {_restaurant.map((r) => (
            <li key={r._id}>
              <RestaurantItem
                _title={r._title}
                _category={r._category}
                _description={r._description}
                _image={r._image}
                _rating={r._rating}
              />
            </li>
          ))}
        </RestList>
      </Container>
    </RestSection>
  )
}

export default Restaurants
