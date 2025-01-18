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
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: RestaurantsState = {
  itens: [],
  status: 'idle',
  error: null
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
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.itens = action.payload
        state.error = null
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = 'failed'
        state.error =
          action.error.message || 'Falha ao carregar os restaurantes'
      })
  }
})

export default RestaurantsSlice.reducer
