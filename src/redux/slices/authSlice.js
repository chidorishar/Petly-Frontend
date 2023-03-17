import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { usersAPI } from './usersAPISlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  blacklist: [usersAPI.reducerPath],
};

function setAuthData(state, { payload: { token, user } }) {
  state.token = token;
  state.user = user;
  state.isUserAuthorized = true;
}

function clearAuthData(state) {
  state.token = null;
  state.user = null;
  state.isUserAuthorized = false;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isUserAuthorized: false,
  },
  reducers: {},

  extraReducers: builder => {
    const { signupUser, loginUser, logoutUser, refreshUser } =
      usersAPI.endpoints;

    builder
      .addMatcher(signupUser.matchFulfilled, setAuthData)
      .addMatcher(loginUser.matchFulfilled, setAuthData)
      .addMatcher(refreshUser.matchFulfilled, (state, { payload }) => {
        const transformedResp = {
          token: state.token,
          user: { name: payload.name, email: payload.email },
        };

        setAuthData(state, { payload: transformedResp });
      })
      .addMatcher(logoutUser.matchFulfilled, clearAuthData);
  },
});

export const authReducer = authSlice.reducer;
export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
