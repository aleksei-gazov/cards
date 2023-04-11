import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'

import { loginAPI, RequiredLoginDataType, ResponseDataType } from '../../api/loginAPI'

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
  loginAPI
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
