import { configureStore } from "@reduxjs/toolkit"
import productSlice from "../reducerSlices/productSlice"
import userSlice from "../reducerSlices/userSlice"
import boxSlice from "../reducerSlices/boxSlice"


const store = configureStore({
    reducer:{
        user: userSlice,
        product: productSlice,
        box: boxSlice
    }
})

export default store