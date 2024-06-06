

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedUser: null
}


const chatSlice = createSlice({
    name: 'chat',
    initialState: initialState,
    reducers:{
        setSelectedUser(state, actions){
            state.selectedUser = actions.payload
        },
      
    }
})

export const {setSelectedUser} = chatSlice.actions
export default chatSlice.reducer