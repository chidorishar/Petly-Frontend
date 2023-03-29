import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BACKEND_BASE_URL, BACKEND_ENDPOINTS, CACHE_TAGS } from 'utils/appKeys';

export const petsApi = createApi({
  reducerPath: 'pets',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BACKEND_BASE_URL}/api/`,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().auth.accessToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [CACHE_TAGS.PETS],
  endpoints: builder => ({
    getPet: builder.query({
      query: () => ({
        url: BACKEND_ENDPOINTS.USERS_PETS,
        method: 'get',
      }),
      providesTags: [CACHE_TAGS.PETS],
    }),

    getPetById: builder.query({
      query(id) {
        // console.log('contactApi:', id);
        return {
          url: `BACKEND_ENDPOINTS.USERS_PETS/${id}`,
          method: 'get',
        };
      },
      providesTags: [CACHE_TAGS.PETS],
    }),

    createPet: builder.mutation({
      query(contact) {
        // console.log('contactApi:', contact);
        return {
          url: BACKEND_ENDPOINTS.USERS_PETS,
          method: 'post',
          body: contact,
        };
      },
      invalidatesTags: [CACHE_TAGS.PETS],
    }),

    deletePet: builder.mutation({
      query(id) {
        // console.log('contactApi:', id);
        return {
          url: `BACKEND_ENDPOINTS.USERS_PETS/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [CACHE_TAGS.PETS],
    }),

    updatePet: builder.mutation({
      query: ({ id, name, number }) => ({
        url: `BACKEND_ENDPOINTS.USERS_PETS/${id}`,
        method: 'PATCH',
        body: { name, number },
      }),
      invalidatesTags: [CACHE_TAGS.PETS],
    }),
  }),
});

export const {
  useGetPetQuery,
  useGetPetByIdQuery,
  useDeletePetMutation,
  useUpdatePetMutation,
  useCreatePetMutation,
} = petsApi;
