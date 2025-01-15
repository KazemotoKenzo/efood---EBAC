import { AddProduct, ProductDescription, ProductTitle } from './styles'

const ProductItem = () => {
  return (
    <>
      <ProductTitle>Pizza Marguerita</ProductTitle>
      <ProductDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse
        mollitia consectetur vitae eos neque suscipit iusto laboriosam quisquam
        nemo consequatur, beatae quibusdam hic provident, molestiae accusamus.
        Cum, voluptatem deserunt!
      </ProductDescription>
      <AddProduct>Adicionar ao carrinho</AddProduct>
    </>
  )
}

export default ProductItem
