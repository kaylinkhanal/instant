import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    width: 40,
    height: 40,
    backgroundColor: 'red'
}


const boxSlice = createSlice({
    name: 'box',
    initialState: initialState,
    reducers:{
        increaseHeight(state, actions){
            state.height= state.height+1
        },
        increaseWidth(state, actions){
            state.width= state.width+1
        },
       changeColor(state, actions){
        debugger;
          state.backgroundColor= actions.payload
        },

    }
})

export const { increaseHeight, increaseWidth,changeColor } = boxSlice.actions
export default boxSlice.reducer