import { CgSun, CgMoon } from 'react-icons/cg';
import { useAppTheme } from 'redux/hooks/useAppTheme';

import { THEME_MODES } from 'utils';
import * as Styled from './ColorThemeSwitch.styled';

export const ColorThemeSwitch = () => {
  const { themeMode, toggleTheme } = useAppTheme();
  const isDarkMode = themeMode === THEME_MODES.DARK;

  return (
    <Styled.ToggleButton
      onClick={toggleTheme}
      $isDarkMode={isDarkMode}
      aria-label="Switch color theme"
    >
      {isDarkMode ? <CgMoon /> : <CgSun />}
    </Styled.ToggleButton>
  );
};
