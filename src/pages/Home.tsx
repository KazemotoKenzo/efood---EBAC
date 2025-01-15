import Hero from '../containers/Hero'
import Restaurants from '../components/Restaurants'
import RestaurantModel from '../models/RestaurantModel'

import hioki_sushi from '../assets/images/restaurants/hioki_sushi.png'
import la_dolce_vita from '../assets/images/restaurants/la_douce_vita_trattoria.png'

const hightlight: RestaurantModel[] = [
  {
    _id: 1,
    _title: 'Hioki Sushi',
    _category: 'Japonesa',
    _rating: 4.9,
    _description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    _image: hioki_sushi
  },
  {
    _id: 2,
    _title: 'La Dolce Vita Trattoria',
    _category: 'Italiana',
    _rating: 4.6,
    _description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    _image: la_dolce_vita
  },
  {
    _id: 3,
    _title: 'Hioki Sushi',
    _category: 'Japonesa',
    _rating: 4.9,
    _description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    _image: hioki_sushi
  },
  {
    _id: 4,
    _title: 'Hioki Sushi',
    _category: 'Japonesa',
    _rating: 4.9,
    _description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    _image: hioki_sushi
  },
  {
    _id: 5,
    _title: 'La Dolce Vita Trattoria',
    _category: 'Italiana',
    _rating: 4.6,
    _description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    _image: la_dolce_vita
  },
  {
    _id: 6,
    _title: 'La Dolce Vita Trattoria',
    _category: 'Italiana',
    _rating: 4.6,
    _description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    _image: la_dolce_vita
  }
]

const Home = () => (
  <>
    <Hero />
    <Restaurants _restaurant={hightlight} />
  </>
)

export default Home
