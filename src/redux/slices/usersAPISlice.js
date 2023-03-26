import { createApi } from '@reduxjs/toolkit/query/react';

import { AUTH_HEADER_NAME, axiosBaseQuery } from 'services/axiosBaseQuery';
import { BACKEND_BASE_URL, BACKEND_ENDPOINTS, CACHE_TAGS } from 'utils/appKeys';
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
    baseUrl: `http://${BACKEND_BASE_URL}/api/`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set([AUTH_HEADER_NAME], `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: [CACHE_TAGS.AUTH_LOGIN],

  endpoints: builder => ({
    signupUser: builder.mutation({
      query: userCredentials => ({
        url: BACKEND_ENDPOINTS.REGISTER,
        method: 'post',
        data: userCredentials,
      }),
      onQueryStarted: invalidateCachedSmthng,
    }),

    loginUser: builder.mutation({
      query: userCredentials => ({
        url: BACKEND_ENDPOINTS.LOGIN,
        method: 'post',
        data: userCredentials,
      }),
      onQueryStarted: invalidateCachedSmthng,
      invalidatesTags: [CACHE_TAGS.AUTH_LOGIN],
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: BACKEND_ENDPOINTS.LOGOUT,
        method: 'post',
      }),
      invalidatesTags: [CACHE_TAGS.AUTH_LOGIN],
    }),

    refreshUser: builder.query({
      query: () => ({ url: `current` }),
      onQueryStarted: invalidateCachedSmthng,
      invalidatesTags: [CACHE_TAGS.AUTH_LOGIN],
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useLazyRefreshUserQuery,
} = usersAPI;
