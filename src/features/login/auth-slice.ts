import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {registrationAPI} from "../registration/registration-api";
import {AppRootState} from "../../app/store";

const registerThunk = createAsyncThunk<{ isRegistered:boolean } , { email: string, password: string }, { rejectValue:string, state:AppRootState }>
("auth/register", async (arg, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        await registrationAPI.register(arg.email, arg.password)

        return {isRegistered:true}
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