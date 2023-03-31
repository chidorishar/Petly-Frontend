import { useDispatch, useSelector } from 'react-redux';

import { themeSelectors } from 'redux/selectors';
const { selectTheme, selectThemeMode } = themeSelectors;
import { toggleTheme as toggleThemeAction } from 'redux/slices/themeSlice';

export const useAppTheme = () => {
  const theme = useSelector(selectTheme);
  const themeMode = useSelector(selectThemeMode);
  const dispatch = useDispatch();
  const toggleTheme = () => dispatch(toggleThemeAction());

  return {
    theme,
    themeMode,
    toggleTheme,
  };
};
