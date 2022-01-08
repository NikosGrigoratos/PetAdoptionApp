import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pet } from '../../typings/pet'

interface petsResult {
  pets: Pet[]
}

// Define a service using a base URL and expected endpoints
export const petApi = createApi({
  reducerPath: 'petApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getAllPets: builder.query<petsResult, void>({
      query: () => `pets/`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPetsQuery } = petApi