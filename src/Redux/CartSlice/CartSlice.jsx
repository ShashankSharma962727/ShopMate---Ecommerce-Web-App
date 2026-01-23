import { createSlice } from '@reduxjs/toolkit'
const initialState = JSON.parse(localStorage.getItem("CartItems")) || [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart(state, action){
            state.push(action.payload);
        },
        deleteFromCart(state, action){
            return state.filter((item) => item.id != action.payload.id);
        }
    }
})

export const {addtoCart, deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;