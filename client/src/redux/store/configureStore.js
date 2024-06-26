import { configureStore,Tuple } from "@reduxjs/toolkit"
import productSlice from "../reducerSlices/productSlice"
import userSlice from "../reducerSlices/userSlice"
import boxSlice from "../reducerSlices/boxSlice"
import logger from 'redux-logger'
import chatSlice from "../reducerSlices/chatSlice"
import ridesSlice from "../reducerSlices/ridesSlice"
import locationSlice from "../reducerSlices/locationSlice"

const store = configureStore({
    reducer:{
        user: userSlice,
        product: productSlice,
        box: boxSlice,
        chat: chatSlice,
        ride: ridesSlice,
        location: locationSlice
    },
    middleware: () => new Tuple( logger)
})

export default store