import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'
import restaurantsReducer from './reducers/restaurants'

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    cart: cartReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootReducer = ReturnType<typeof store.getState>
