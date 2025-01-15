import Container from '../../styles/container'
import {
  RestaurantCategory,
  RestaurantProfile,
  RestaurantTitle
} from './styles'

const Banner = () => {
  return (
    <RestaurantProfile>
      <Container>
        <RestaurantCategory>Italian</RestaurantCategory>
        <RestaurantTitle>La Dolce Vita Trattoria</RestaurantTitle>
      </Container>
    </RestaurantProfile>
  )
}

export default Banner
