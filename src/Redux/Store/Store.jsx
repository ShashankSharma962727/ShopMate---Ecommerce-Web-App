import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../CartSlice/CartSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice
  },
  devTools: "true"
})