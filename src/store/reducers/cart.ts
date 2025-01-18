import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Product = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type CartState = {
  itens: Product[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const product = action.payload

      if (state.itens.find((p) => p.id === product.id)) {
        alert('Este item já foi adicionado')
      } else {
        alert(`${product.nome} adicionado no carrinho!`)
        state.itens.push(product)
      }
    },
    reset: (state) => {
      alert('Carrinho resetado')
      state.itens = []
    }
  }
})

export const { add, reset } = cartSlice.actions
export default cartSlice.reducer
