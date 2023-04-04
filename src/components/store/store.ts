import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
 import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
         auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().prepend(thunk)// можно это и не писать т.к. санка идет по дефолту
})

export default store