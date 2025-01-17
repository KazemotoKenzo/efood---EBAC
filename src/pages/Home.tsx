import Hero from '../containers/Hero'
import Restaurants from '../components/Restaurants'
import RestaurantModel from '../models/RestaurantModel'

import hioki_sushi from '../assets/images/restaurants/hioki_sushi.png'
import la_dolce_vita from '../assets/images/restaurants/la_douce_vita_trattoria.png'

const hightlight: RestaurantModel[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    category: 'Japonesa',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki_sushi
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: la_dolce_vita
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: la_dolce_vita
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: la_dolce_vita
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: la_dolce_vita
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: la_dolce_vita
  }
]

const Home = () => (
  <>
    <Hero />
    <Restaurants restaurant={hightlight} />
  </>
)

export default Home
