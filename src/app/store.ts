import { AnyAction, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import thunk from 'redux-thunk'

import { authReducer } from '../features/login/auth-slice'
import { registrationReducer } from '../features/registration/registration-slice'

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk), // можно это и не писать т.к. санка идет по дефолту
})

export type AppRootState = ReturnType<typeof store.getState>
type ThunkDispatchType = typeof store.dispatch //типизация dispatch для Redux toolkit

// type ThunkDispatchType = ThunkDispatch<AppRootState, any, AnyAction> //типизация dispatch для обычного redux
//export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, AnyAction> //типизация thunk для обычного redux

export const useAppDispatch = () => useDispatch<ThunkDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export default store
