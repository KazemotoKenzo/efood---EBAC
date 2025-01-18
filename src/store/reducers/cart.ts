import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ProductModel from '../../models/ProductModel'

type CartState = {
  itens: ProductModel[]
}

const initialState: CartState = {
  itens: []
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductModel>) => {
      const product = action.payload

      state.itens.push(product)
      alert('item adicionado')
    },
    reset: (state) => {
      state.itens = []
    }
  }
})

export const { add, reset } = CartSlice.actions
export default CartSlice.reducer
