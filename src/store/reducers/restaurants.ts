import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type RestaurantsState = {
  itens: {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: [
      {
        foto: string
        preco: number
        id: number
        nome: string
        descricao: string
        porcao: string
      }
    ]
  }[]
}

const initialState: RestaurantsState = {
  itens: []
}

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async () => {
    const response = await fetch(
      'https://fake-api-tau.vercel.app/api/efood/restaurantes'
    )
    const data = await response.json()
    return data
  }
)

const RestaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.itens = action.payload
    })
  }
})

export default RestaurantsSlice.reducer
