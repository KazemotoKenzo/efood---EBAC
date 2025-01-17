import RestaurantModel from '../../models/RestaurantModel'

import Container from '../../styles/container'
import RestaurantItem from '../../containers/RestaurantItem'
import { RestList, RestSection } from './styles'

type Props = {
  restaurant: RestaurantModel[]
}

const Restaurants = ({ restaurant }: Props) => {
  return (
    <RestSection>
      <Container>
        <RestList>
          {restaurant.map((r) => (
            <RestaurantItem
              key={r.id}
              title={r.title}
              category={r.category}
              description={r.description}
              image={r.image}
              rating={r.rating}
            />
          ))}
        </RestList>
      </Container>
    </RestSection>
  )
}

export default Restaurants
