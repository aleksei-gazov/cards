import { configureStore } from "@reduxjs/toolkit";
 import thunk from 'redux-thunk';
import { authReducer } from "../features/login/auth-slice";

const store = configureStore({
    reducer: {
         auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().prepend(thunk)// можно это и не писать т.к. санка идет по дефолту
})

export default store