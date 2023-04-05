import {AnyAction, configureStore, ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
 import thunk from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const store = configureStore({
    reducer: {
         auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().prepend(thunk)// можно это и не писать т.к. санка идет по дефолту
})


export type AppRootState = ReturnType<typeof store.getState>
type ThunkDispatchType =typeof store.dispatch //типизация dispatch для Redux toolkit

// type ThunkDispatchType = ThunkDispatch<AppRootState, any, AnyAction> //типизация dispatch для обычного redux
//export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, AnyAction> //типизация thunk для обычного redux

export const useAppDispatch = () => useDispatch<ThunkDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;

export default store