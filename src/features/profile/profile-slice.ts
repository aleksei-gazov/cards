import { createSlice,  PayloadAction } from "@reduxjs/toolkit";






export const profileSlice = createSlice({
    name: 'profil',
    initialState:  {
        isLoggedIn: false,
        isInitialized: false,
    },
    reducers: {

    }

})

export const authReducer = profileSlice.reducer
// export const {setIsLoggedInAC, setInitialStateAC} = authSlice.actions