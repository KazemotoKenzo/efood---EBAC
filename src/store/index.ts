import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'
import checkoutReducer from './reducers/checkout'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootReducer = ReturnType<typeof store.getState>
