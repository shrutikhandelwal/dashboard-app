import { createApi, fetchBaseQuery } from "@reduxjs/toolkit"

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP__BASE_URL}),
  reducerPath: "adminApi",
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/$(id)`,
      providesTags: ["User"]
    })
  })
})

export const {
  useGetUserQuery,
} = api;