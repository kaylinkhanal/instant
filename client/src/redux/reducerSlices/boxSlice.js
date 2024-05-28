import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    borderRadius: '0%',
    bottom:0,
    left:0,


}


const boxSlice = createSlice({
    name: 'box',
    initialState: initialState,
    reducers:{
        switchArrow(state, actions){
            const  {value, type} = actions.payload
                  //reset bottom and left once
            if(type == 'up' || type == 'down'){
                state.bottom = value
                state.left= 0
            }else {
                state.left = value
                state.bottom= 0
            }
     
        },
        increaseHeight(state, actions){
            if(state.borderRadius == '50%'){
                state.height= state.height+1
                state.width= state.height+1
            }else{
                state.height= state.height+1
            }
   
        },
        increaseWidth(state, actions){
            if(state.borderRadius == '50%'){
                state.height= state.height+1
                state.width= state.height+1
            }else{
                state.width= state.width+1
            }
        },
       changeColor(state, actions){
          state.backgroundColor= actions.payload
        },
        changeShape(state, actions){
                if(state.borderRadius == '0%'){

                    state.borderRadius= '50%'
                    state.width = state.height
                }else{
                    state.borderRadius = '0%'
                }
        },
        reset(state, actions){
            return  {...initialState}
            },
                  

    }
})

export const { increaseHeight,reset, increaseWidth,changeColor ,switchArrow,changeShape} = boxSlice.actions
export default boxSlice.reducer