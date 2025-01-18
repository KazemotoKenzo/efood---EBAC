import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Container from '../../styles/container'
import RestaurantItem from '../../containers/RestaurantItem'
import { RestList, RestSection } from './styles'

const Restaurants = () => {
  const itens = useSelector((state: RootReducer) => state.restaurants.itens)

  return (
    <RestSection>
      <Container>
        <RestList>
          {itens.map((r) => (
            <RestaurantItem
              key={r.id}
              title={r.titulo}
              category={r.tipo}
              description={r.descricao}
              image={r.capa}
              rating={r.avaliacao}
              id={r.id}
              destacado={r.destacado}
            />
          ))}
        </RestList>
      </Container>
    </RestSection>
  )
}

export default Restaurants
