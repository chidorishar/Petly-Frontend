import { createApi } from '@reduxjs/toolkit/query/react';

import { AUTH_HEADER_NAME, axiosBaseQuery } from 'services/axiosBaseQuery';
// import {
//   CONTACTS_DATA_CACHE_TAG,
//   phonebookAPI,
// } from 'redux/slices/contactsApiSlice';

async function invalidateCachedSmthng(_, { dispatch, queryFulfilled }) {
  try {
    await queryFulfilled;
    // invalidate cached contacts data
    // dispatch(phonebookAPI.util.invalidateTags([CONTACTS_DATA_CACHE_TAG]));
    dispatch();
  } catch (err) {
    _;
  }
}

export const usersAPI = createApi({
  reducerPath: 'usersAPI',

  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set([AUTH_HEADER_NAME], `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['AuthData'],

  endpoints: builder => ({
    signupUser: builder.mutation({
      query: userCredentials => ({
        url: `signup`,
        method: 'post',
        data: userCredentials,
      }),
      onQueryStarted: invalidateCachedSmthng,
      invalidatesTags: ['AuthData'],
    }),

    loginUser: builder.mutation({
      query: userCredentials => ({
        url: `login`,
        method: 'post',
        data: userCredentials,
      }),
      onQueryStarted: invalidateCachedSmthng,
      invalidatesTags: ['AuthData'],
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: `logout`,
        method: 'post',
      }),
      invalidatesTags: ['AuthData'],
    }),

    refreshUser: builder.query({
      query: () => ({ url: `current` }),
      onQueryStarted: invalidateCachedSmthng,
      invalidatesTags: ['AuthData'],
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useLazyRefreshUserQuery,
} = usersAPI;
