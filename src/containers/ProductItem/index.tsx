import product from '../../assets/images/products/pizza_margueritta.png'

import {
  AddProduct,
  ProductDescription,
  ProductTitle,
  ProductImage
} from './styles'

const ProductItem = () => {
  return (
    <>
      <ProductImage src={product} />
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
