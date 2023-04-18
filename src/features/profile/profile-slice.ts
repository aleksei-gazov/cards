import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { profileAPI } from '../../api/profileAPI'

export const getProfile = createAsyncThunk('profile/setProfile', async (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  console.log('th')
  try {
    const res = await profileAPI.me()

    console.log('y')

    console.log(res)

    // return { res }
  } catch (e: any) {
    console.log('g')

    return rejectWithValue(e)
  }
})
// export const updateStatus = createAsyncThunk('profile/updateStatus', async (arg, thunkAPI) => {
//   const { rejectWithValue } = thunkAPI
//
//   try {
//     await profileAPI.updateStatus(arg.status)
//
//     return { isLoginIn: true }
//   } catch (e: any) {
//     return rejectWithValue(e)
//   }
// })

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isLoginIn: false,
    user: {
      id: '',
      email: 'email',
      name: 'Вася',
      avatar: 'avatar',
      status: 'gud status',
      publicCardPacksCount: 2,

      created: '', //data
      updated: '', //data
      isAdmin: false,
      verified: false,
      rememberMe: true,

      error: '',
    },
  },
  reducers: {},
  extraReducers: builder => {
    // builder.addCase(getProfile.fulfilled, (state, action) => {
    //   state.user = action.payload.res
    // })
    // .addCase(updateStatus.fulfilled, (state, action) => {
    //   state.user.status = action.payload.user.status
    // })
  },
})

export const profileReducer = profileSlice.reducer
export const {} = profileSlice.actions
export const profileThunks = { getProfile }
