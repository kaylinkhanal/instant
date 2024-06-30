import { combineReducers, configureStore,Tuple } from "@reduxjs/toolkit"
import productSlice from "../reducerSlices/productSlice"
import userSlice from "../reducerSlices/userSlice"
import boxSlice from "../reducerSlices/boxSlice"
import logger from 'redux-logger'
import chatSlice from "../reducerSlices/chatSlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import ridesSlice from "../reducerSlices/ridesSlice"
import locationSlice from "../reducerSlices/locationSlice"

const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({
    user: userSlice,
    product: productSlice,
    box: boxSlice,
    chat: chatSlice,
    ride: ridesSlice,
    location: locationSlice
})
  


  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  export const store =  configureStore({
    reducer: persistedReducer,
    middleware: () => new Tuple( logger)
})

export const persistor = persistStore(store)
