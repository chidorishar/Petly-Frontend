import { Container } from 'components/common';
import LanguageSwitch from 'components/common/LanguageSwitch/LanguageSwitch';

import { AdditionalFunctionalityWrapper, HeaderBlok } from './Header.styled';
import { Logo } from 'components/Logo/Logo';
import { ColorThemeSwitch } from 'components/ColorThemeSwitch/ColorThemeSwitch';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <header>
      <Container>
        <HeaderBlok>
          <Logo />
          <AdditionalFunctionalityWrapper>
            <LanguageSwitch />
            <ColorThemeSwitch />
          </AdditionalFunctionalityWrapper>
          <Navigation />
        </HeaderBlok>
      </Container>
    </header>
  );
};
