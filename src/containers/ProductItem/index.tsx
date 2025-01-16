import {
  AddProduct,
  ProductDescription,
  ProductTitle,
  ProductImage
} from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const ProductItem = ({ image, title, description }: Props) => {
  return (
    <>
      <ProductImage src={image} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <AddProduct>Adicionar ao carrinho</AddProduct>
    </>
  )
}

export default ProductItem
