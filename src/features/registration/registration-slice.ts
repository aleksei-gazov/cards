import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { AppRootState } from '../../app/store'

import { registrationAPI } from './registration-api'

const registerThunk = createAsyncThunk<
  { isRegistered: boolean; isError: null | string },
  { email: string; password: string },
  { rejectValue: string; state: AppRootState }
>('auth/register', async (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    await registrationAPI.register(arg.email, arg.password)

    return { isRegistered: true, isError: null }
  } catch (e: any) {
    return rejectWithValue(e.response.data.error) //передаст ошибку с сервера, в extra reducer(action.payload)
  }
})

export const registrationSlice = createSlice({
  name: 'auth',
  initialState: {
    isRegistered: false,
    isError: null as string | null | undefined,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isRegistered = action.payload.isRegistered
      })
      .addCase(registerThunk.rejected, (state, action) => {
        console.log(action.payload)
        state.isError = action.payload
      })
  },
})

export const registrationReducer = registrationSlice.reducer
export const {} = registrationSlice.actions
export const registrationThunks = { registerThunk }
