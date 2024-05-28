import { configureStore,Tuple } from "@reduxjs/toolkit"
import productSlice from "../reducerSlices/productSlice"
import userSlice from "../reducerSlices/userSlice"
import boxSlice from "../reducerSlices/boxSlice"
import logger from 'redux-logger'

const store = configureStore({
    reducer:{
        user: userSlice,
        product: productSlice,
        box: boxSlice
    },
    middleware: () => new Tuple( logger)
})

export default store