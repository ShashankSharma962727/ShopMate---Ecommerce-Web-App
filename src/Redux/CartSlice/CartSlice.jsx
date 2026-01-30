import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("CartItems")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(state, action) {
      const itemExist = state.find(
        (item) => item.id === action.payload.id
      );

      if (itemExist) {
        alert("Product already in Cart!");
        return;
      } else {
        state.push(action.payload);
      }
    },

    deleteFromCart(state, action) {
      return state.filter(
        (item) => item.id !== action.payload.id
      );
    },

    // ✅ NEW FIX (IMPORTANT)
    clearCart() {
      localStorage.removeItem("CartItems"); // localStorage bhi clear
      return [];
    },
  },
});

export const { addtoCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
