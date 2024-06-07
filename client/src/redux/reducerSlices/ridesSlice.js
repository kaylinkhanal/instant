

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedVehicle: 'Tesla'
}


const rideSlice = createSlice({
    name: 'ride',
    initialState: initialState,
    reducers:{
        
        setSelectedVehicle(state, actions){
          return {
            ...state,
            selectedVehicle: actions.payload
          }
        },
       
    }
})

export const { setSelectedVehicle } = rideSlice.actions
export default rideSlice.reducer