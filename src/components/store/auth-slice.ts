import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {registrationAPI} from "../registration/registration-api";
import {AppRootState} from "./store";

const registerThunk = createAsyncThunk<{ isRegistered:boolean } , { email: string, password: string }, { rejectValue:string, state:AppRootState }>
("auth/register", async (arg, thunkAPI)=>{
    const {rejectWithValue, getState} = thunkAPI
    try{
        const {isRegistered} =getState().auth
        const res = await registrationAPI.register(arg.email, arg.password)

        return {isRegistered}
    }
    catch (e:any){
        return rejectWithValue(e)
    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState:  {
        isLoggedIn: false,
        isInitialized: false,
        isRegistered: false
    },
    reducers: {

    },
    extraReducers:builder => {
        builder
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.isRegistered = action.payload.isRegistered
            })
    }
})

export const authReducer = authSlice.reducer
export const {
    // setIsLoggedInAC,
    // setInitialStateAC,
    } = authSlice.actions
export const authThunks = {registerThunk}