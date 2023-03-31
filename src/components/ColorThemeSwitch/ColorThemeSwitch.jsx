import { CgSun, CgMoon } from 'react-icons/cg';
import { useAppTheme } from 'redux/hooks/useAppTheme';

import { THEME_MODES } from 'utils';
import * as Styled from './ColorThemeSwitch.styled';

export const ColorThemeSwitch = () => {
  const { themeMode, toggleTheme } = useAppTheme();

  return (
    <Styled.ToggleButton onClick={toggleTheme} aria-label="Switch color theme">
      {themeMode === THEME_MODES.LIGHT ? <CgSun /> : <CgMoon />}
    </Styled.ToggleButton>
  );
};
