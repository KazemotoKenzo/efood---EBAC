import ProductModel from './ProductModel'

class RestaurantModel {
  title: string
  description: string
  image: string
  category: string
  rating: number
  products?: ProductModel[]
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    category: string,
    rating: number
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.category = category
    this.rating = rating
  }
}

export default RestaurantModel
