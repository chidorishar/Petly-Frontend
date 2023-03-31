import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'theme',
  storage,
  whitelist: ['themeMode', 'themes', 'currentTheme'],
};

import { allThemes, THEME_MODES } from 'utils/theme';

const themeInitialState = {
  themeMode: THEME_MODES.DARK,
  currentTheme: allThemes[THEME_MODES.DARK],
  themes: allThemes,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: themeInitialState,

  reducers: {
    setTheme(state, { payload: themeMod }) {
      state.themeMode = themeMod;
      state.currentTheme =
        state.themes[themeMod] ?? state.themes[THEME_MODES.DARK];
    },

    toggleTheme(state) {
      state.themeMode =
        state.themeMode === THEME_MODES.DARK
          ? THEME_MODES.LIGHT
          : THEME_MODES.DARK;
      state.currentTheme = state.themes[state.themeMode];
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
export const persistedThemeReducer = persistReducer(
  persistConfig,
  themeReducer
);
