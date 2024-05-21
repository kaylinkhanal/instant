

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    token: '',
    todaysRideCount: 3232
}


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        setLoggedIn(state, actions){
            state.isLoggedIn = true
            return state
        },
        addToken(state, actions){
            state.token = '34r3gbgfdsadfvhdsjsnk'
            return state
        },
        updateRideCount(state, actions){
            state.todaysRideCount= state.todaysRideCount + 1
            return state
        }
    }
})

export const { setLoggedIn, addToken, updateRideCount } = userSlice.actions
export default userSlice.reducer