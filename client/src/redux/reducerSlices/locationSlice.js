

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pickUpCoords:[27.70169, 85.3206],
    selectedPickUpAddress: ''
}


const locationSlice = createSlice({
    name: 'ride',
    initialState: initialState,
    reducers:{
        
        setPickUpCords(state, actions){
          const refactoredCoords = actions.payload.reverse()
          return {
            ...state,
            pickUpCoords: refactoredCoords
          }
        },
          setPickUpAddress(state, actions){
          return {
            ...state,
            selectedPickUpAddress: actions.payload
          }
        },
    }
})

export const { setPickUpCords,setPickUpAddress } = locationSlice.actions
export default locationSlice.reducer