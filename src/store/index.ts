import { configureStore } from '@reduxjs/toolkit'

import restaurantsReducer from './reducers/restaurants'
import cartReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    cart: cartReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
