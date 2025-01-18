import {
  AddProduct,
  ProductDescription,
  ProductTitle,
  ProductImage
} from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
}

const ProductItem = ({ foto, nome, descricao }: Props) => {
  return (
    <>
      <ProductImage src={foto} />
      <ProductTitle>{nome}</ProductTitle>
      <ProductDescription>{descricao}</ProductDescription>
      <AddProduct>Adicionar ao carrinho</AddProduct>
    </>
  )
}

export default ProductItem
