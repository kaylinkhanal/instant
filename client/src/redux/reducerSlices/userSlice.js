

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
        logoutUser(state,actions){
          return initialState
        }
      
    }
})

export const { addToken, addUserDetails,logoutUser } = userSlice.actions
export default userSlice.reducer