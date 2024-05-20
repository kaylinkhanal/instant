

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
        setLoggedIn(state, payload){
            state.isLoggedIn = true
            return state
        },
        addToken(state, payload){
            state.token = '34r3gbgfdsadfvhdsjsnk'
            return state
        },
        updateRideCount(state, payload){
            state.todaysRideCount= state.todaysRideCount + 1
            return state
        }
    }
})

export const { setLoggedIn, addToken, updateRideCount } = userSlice.actions
export default userSlice.reducer