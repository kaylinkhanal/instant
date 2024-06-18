

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pickUpCoords:[27.70169, 85.3206],
    destinationCoords:[27.70182, 85.3206],
    selectedPickUpAddress: '',
    selectedDestinationAddress: '',
    currentMapState: 'pickup'
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
        setDestinationCords(state, actions){
          const refactoredCoords = actions.payload.reverse()
          return {
            ...state,
            destinationCoords: refactoredCoords
          }
        },
          setPickUpAddress(state, actions){
          return {
            ...state,
            selectedPickUpAddress: actions.payload
          }
        },
        setDestinationAddress(state, actions){
          return {
            ...state,
            selectedDestinationAddress: actions.payload
          }
        },
        setCurrentMapState(state, actions){
          return{
            ...state,
            currentMapState: actions.payload
          }
        }
    }
})

export const { setPickUpCords,setDestinationCords,setPickUpAddress,setDestinationAddress,setCurrentMapState } = locationSlice.actions
export default locationSlice.reducer