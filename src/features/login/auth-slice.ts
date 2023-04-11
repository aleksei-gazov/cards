import { createSlice,  PayloadAction } from "@reduxjs/toolkit";




export const authSlice = createSlice({
    name: 'auth',
    initialState:  {
        isLoggedIn: false,
        isInitialized: false,
    },
    reducers: {

    }

})

export const authReducer = authSlice.reducer
// export const {setIsLoggedInAC, setInitialStateAC} = authSlice.actions