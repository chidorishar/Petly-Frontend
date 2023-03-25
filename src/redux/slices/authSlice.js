import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { usersAPI } from './usersAPISlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
  blacklist: [usersAPI.reducerPath],
};

function setAuthData(state, { payload }) {
  if (!payload) return;

  const { accessToken, refreshToken, ...user } = payload.data.user;

  state.accessToken = accessToken;
  state.refreshToken = refreshToken;
  state.user = user;
  state.isUserAuthorized = true;
}

function setUserData(state, { payload }) {
  if (!payload) return;

  state.user = payload.data.user;
  state.isUserAuthorized = true;
}

function clearAuthData(state) {
  state.accessToken = null;
  state.refreshToken = null;
  state.user = null;
  state.isUserAuthorized = false;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    accessToken: null,
    refreshToken: null,
    isUserAuthorized: false,
  },
  reducers: {},

  extraReducers: builder => {
    const { signupUser, loginUser, logoutUser, refreshUser } =
      usersAPI.endpoints;

    builder
      .addMatcher(signupUser.matchFulfilled, setAuthData)
      .addMatcher(loginUser.matchFulfilled, setAuthData)
      .addMatcher(refreshUser.matchFulfilled, setUserData)
      .addMatcher(logoutUser.matchFulfilled, clearAuthData);
  },
});

export const authReducer = authSlice.reducer;
export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
