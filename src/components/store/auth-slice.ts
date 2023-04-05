import { createSlice,  PayloadAction } from "@reduxjs/toolkit";




export const authSlice = createSlice({
    name: 'auth',
    initialState:  {
        isLoggedIn: false,
        isInitialized: false,
        isRegistered: false
    },
    reducers: {
        isRegisteredAC: (state, action:PayloadAction<{isRegistered:boolean}>) => {
            state.isRegistered = action.payload.isRegistered //делаем мутабельное изменение!!!
        },
    }

})

export const authReducer = authSlice.reducer
export const {
    // setIsLoggedInAC,
    // setInitialStateAC,
    isRegisteredAC} = authSlice.actions