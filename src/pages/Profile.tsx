import { useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { useParams } from 'react-router-dom'

import Header from '../containers/Header'
import RestaurantPage from '../components/RestaurantPage'
import Banner from '../components/Banner'

const Profile = () => {
  const { id } = useParams<{ id: string }>()
  const item = useSelector((state: RootReducer) => state.restaurants.itens)

  const restaurant = item.find((r) => r.id === Number(id))

  if (!restaurant) {
    return <p>Restaurante não encontrado</p>
  }

  return (
    <>
      <Header />
      <Banner
        capa={restaurant.capa}
        tipo={restaurant.tipo}
        titulo={restaurant.titulo}
      />
      <RestaurantPage cardapio={restaurant.cardapio} />
    </>
  )
}

export default Profile
