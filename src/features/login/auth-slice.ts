import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'

import { authAPI, RequiredLoginDataType, ResponseDataType } from '../../api/authAPI'

import { createAppAsyncThunk } from 'comman/utils/create-app-async-thunk'

// const login = createAppAsyncThunk<{ data: RequiredLoginDataType }, RequiredLoginDataType>(
//   'auth/login',
//   async (arg, thunkAPI) => {
//     const { dispatch, rejectWithValue } = thunkAPI
//
//     try {
//       dispatch(appActions.setAppStatus({ status: 'loading' }))
//       const res = await authAPI.login(arg)
//
//       if (res.data.resultCode === 0) {
//         dispatch(appActions.setAppStatus({ status: 'succeeded' }))
//
//         return { isLoggedIn: true }
//       } else {
//         const isShowAppError = !!res.data.fieldsErrors.length
//
//         handleServerAppError(res.data, dispatch, isShowAppError)
//
//         return rejectWithValue(res.data)
//       }
//     } catch (e) {
//       handleServerNetworkError(e, dispatch)
//
//       return rejectWithValue(null)
//     }
//   }
// )

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    isInitialized: false,
    dataForProfilePage: {},
  },
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<{ isLoggedIn: boolean }>) => {
      state.isLoggedIn = action.payload.isLoggedIn
    },
    setIsInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized
    },
    setInitialState: (state, action: PayloadAction<{ data: ResponseDataType }>) => {
      state.dataForProfilePage = action.payload.data
    },
  },
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
// export const {setIsLoggedInAC, setInitialStateAC} = authSlice.actions

// thunks
export const loginTC = (data: RequiredLoginDataType) => (dispatch: Dispatch) => {
  authAPI
    .login(data)
    .then(res => {
      dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }))
      dispatch(authActions.setIsInitialized({ isInitialized: true }))
      dispatch(authActions.setInitialState({ data: res }))
    })
    .catch(e => {
      const error = e.response ? e.response.data.error : e.message + ', more details in the console'

      console.log('Error: ', { ...error })
    })
}
