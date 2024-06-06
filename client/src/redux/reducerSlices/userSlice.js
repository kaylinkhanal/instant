

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    token: '',
    userDetails: {}
}


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        
        addToken(state, actions){
          return {
            ...state,
            isLoggedIn: true,
            token: actions.payload
          }
        },
        addUserDetails(state, actions){
            state.userDetails = actions.payload
        },
      
    }
})

export const { addToken, addUserDetails } = userSlice.actions
export default userSlice.reducer