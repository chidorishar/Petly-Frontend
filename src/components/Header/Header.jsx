import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from 'components/common';
import { HeaderBlok } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <Container>
        <HeaderBlok>
          <Logo />
          <Navigation />
        </HeaderBlok>
      </Container>
    </header>
  );
};
