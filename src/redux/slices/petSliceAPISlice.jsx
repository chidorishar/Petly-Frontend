import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const petsApi = createApi({
  reducerPath: 'pets',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Pet'],
  endpoints: builder => ({
    getPet: builder.query({
      query: () => ({
        url: `/pets`,
        method: 'get',
      }),
      providesTags: ['Pet'],
    }),

    getPetById: builder.query({
      query(id) {
        // console.log('contactApi:', id);
        return {
          url: `/pets/${id}`,
          method: 'get',
        };
      },
      providesTags: ['Pet'],
    }),

    createPet: builder.mutation({
      query(contact) {
        // console.log('contactApi:', contact);
        return {
          url: `/pets`,
          method: 'post',
          body: contact,
        };
      },
      invalidatesTags: ['Pet'],
    }),

    deletePet: builder.mutation({
      query(id) {
        // console.log('contactApi:', id);
        return {
          url: `/pets/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Pet'],
    }),

    updatePet: builder.mutation({
      query: ({ id, name, number }) => ({
        url: `/pets/${id}`,
        method: 'PATCH',
        body: { name, number },
      }),
      invalidatesTags: ['Pet'],
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
