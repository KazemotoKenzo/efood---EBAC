type MaxTwoNumbers = [number] | [number, number]

class ProductModel {
  id: number
  title: string
  description: string
  image: string
  prices: number
  serves: MaxTwoNumbers

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    prices: number,
    serves: MaxTwoNumbers
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.serves = serves
    this.prices = prices
  }
}

export default ProductModel
