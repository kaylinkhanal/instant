import { configureStore } from "@reduxjs/toolkit"
import productSlice from "../reducerSlices/productSlice"
import userSlice from "../reducerSlices/userSlice"


const store = configureStore({
    reducer:{
        user: userSlice,
        product: productSlice
    }
})

export default store