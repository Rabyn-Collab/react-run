import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const api_key = 'e526a219312a40a88b575f8738537e06'

export const newsSlice = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://free-news.p.rapidapi.com'
  }),
  endpoints: (builder) => ({

    getNews: builder.query({
      query: (query) => ({
        url: '/v1/search',
        headers: {
          'X-RapidAPI-Key': '89e53c72d7msh16aa8c041814a4cp1f3e79jsn333d7bcaf747',
          'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
        },
        params: {
          'q': query,
          'lang': 'en'
        },
      })
    }),


  })
})


export const { useGetNewsQuery } = newsSlice;