import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedAuthReducer } from './slices/authSlice.js';
import { usersAPI } from './slices/usersAPISlice.js';
import { friendsReducer } from './slices/friendsSlice.js';

export const store = configureStore({
  reducer: {
    [usersAPI.reducerPath]: usersAPI.reducer,
    auth: persistedAuthReducer,
    friends: friendsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(usersAPI.middleware),
});

export const persistedStore = persistStore(store);
