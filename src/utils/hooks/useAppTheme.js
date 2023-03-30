import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from 'utils/storage/localStorage';

export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
};
const LS_SELECTED_THEME_MODE_KEY = 'themeMode';

export const useAppTheme = () => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(null);
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [themeMode, setThemeMode] = useState(
    getFromLS(LS_SELECTED_THEME_MODE_KEY) ?? THEME_MODES.DARK
  );

  const setMode = mode => {
    setThemeMode(mode);
    setToLS(LS_SELECTED_THEME_MODE_KEY, themeMode);
  };

  const toggleTheme = () => {
    themeMode === THEME_MODES.LIGHT
      ? setMode(THEME_MODES.DARK)
      : setMode(THEME_MODES.LIGHT);
  };

  useEffect(() => {
    const localThemeMode = getFromLS(LS_SELECTED_THEME_MODE_KEY);
    localThemeMode ? setTheme(themes[localThemeMode]) : setTheme(themes.light);
    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    //  write mode to LS
    setToLS(LS_SELECTED_THEME_MODE_KEY, themeMode);

    // set current theme based on mode
    themeMode === THEME_MODES.LIGHT
      ? setTheme(themes.light)
      : setTheme(themes.dark);
  }, [themeMode]);

  return { theme, themeLoaded, setMode, toggleTheme, THEME_MODES };
};
