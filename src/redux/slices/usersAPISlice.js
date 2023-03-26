import { createApi } from '@reduxjs/toolkit/query/react';

import { AUTH_HEADER_NAME, axiosBaseQuery } from 'services/axiosBaseQuery';
import { BACKEND_BASE_URL, BACKEND_ENDPOINTS, CACHE_TAGS } from 'utils/appKeys';

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
      const acessToken = getState().auth.accessToken;
      if (acessToken) {
        headers.set([AUTH_HEADER_NAME], `Bearer ${acessToken}`);
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

    currentUser: builder.query({
      query: () => ({ url: BACKEND_ENDPOINTS.CURRENT }),
      onQueryStarted: invalidateCachedSmthng,
      invalidatesTags: [CACHE_TAGS.AUTH_LOGIN],
    }),

    refreshUser: builder.mutation({
      query: payload => ({
        url: BACKEND_ENDPOINTS.REFRESH,
        method: 'post',
        data: { refreshToken: payload },
      }),
      onQueryStarted: invalidateCachedSmthng,
      invalidatesTags: [CACHE_TAGS.AUTH_LOGIN],
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useLazyCurrentUserQuery,
  useRefreshUserMutation,
} = usersAPI;
