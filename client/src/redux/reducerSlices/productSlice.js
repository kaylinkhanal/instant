import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems: [],
    wishListItems: [],
    selectedProduct: ''
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers:{
        addToCart(state, payload){
            state.cartItems = ['hawkins']
            return state
        },
        resetCart(state, payload){
            state.cartItems = []
            return state
        }
    }
})

export const { addToCart, resetCart } = productSlice.actions
export default productSlice.reducer