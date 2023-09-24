import { configureStore } from "@reduxjs/toolkit"
import { currencyDataApi } from "./api/currencyDataApi"


export const store = configureStore({
    reducer: {
        [currencyDataApi.reducerPath]: currencyDataApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyDataApi.middleware)
})