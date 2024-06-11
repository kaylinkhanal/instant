

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pickUpCoords:[27.70169, 85.3206],
}


const locationSlice = createSlice({
    name: 'ride',
    initialState: initialState,
    reducers:{
        
        setPickUpCords(state, actions){
          return {
            ...state,
            pickUpCoords: actions.payload
          }
        },
       
    }
})

export const { setPickUpCords } = locationSlice.actions
export default locationSlice.reducer