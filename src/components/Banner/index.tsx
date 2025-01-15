import restaurat from '../../assets/images/restaurants/la_douce_vita_trattoria.png'

import Container from '../../styles/container'
import {
  RestaurantCategory,
  RestaurantProfile,
  RestaurantTitle
} from './styles'

const Banner = () => {
  return (
    <RestaurantProfile style={{ backgroundImage: `url('${restaurat}')` }}>
      <Container>
        <RestaurantCategory>Italian</RestaurantCategory>
        <RestaurantTitle>La Dolce Vita Trattoria</RestaurantTitle>
      </Container>
    </RestaurantProfile>
  )
}

export default Banner
