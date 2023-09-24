import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const currencyDataApi = createApi({
    reducerPath: "currencyDataApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://bravenewcoin.p.rapidapi.com"
    }),
    tagTypes: ["currencyData"],
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => ({
                url: `/ohlcv`,
                params: { size: '10' },
                headers: {
                    Authorization: 'Bearer ////token//////',
                    'X-RapidAPI-Key': 'df8bd2ca4amsha0c58f8dc36c033p1e069djsnac0f304530aa',
                    'X-RapidAPI-Host': 'bravenewcoin.p.rapidapi.com'
                }
            }),
            providesTags: ["currencyData"]
        }),
        getToken: builder.mutation({
            query: () => ({
                url: "/oauth/token",
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'df8bd2ca4amsha0c58f8dc36c033p1e069djsnac0f304530aa',
                    'X-RapidAPI-Host': 'bravenewcoin.p.rapidapi.com'
                },
                body: {
                    audience: 'https://api.bravenewcoin.com',
                    client_id: 'oCdQoZoI96ERE9HY3sQ7JmbACfBf55RY',
                    grant_type: 'client_credentials'
                }
            }),
            invalidatesTags: ["currencyData"]
        })
    })
})


export const { useGetDataQuery, useGetTokenMutation } = currencyDataApi