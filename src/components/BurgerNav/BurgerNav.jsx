import { useEffect } from 'react';
import { useMedia } from 'react-use';
import PropTypes from 'prop-types';

import { useAuth } from 'redux/hooks/getAuth';

import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { BurgerNavCloseBtn } from 'components/BurgerNav/BurgerNavCloseBtn';
import { BurgerNavMenu, LogoMenu, UserAuthMenu } from './BurgerNav.styled';
import { Container } from 'components/common';

export const BurgerNav = ({ close }) => {
  const { isUserAuthorized, isUserRefreshing } = useAuth();
  const isMobile = useMedia('(max-width: 767px)');
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <BurgerNavMenu onClick={close}>
      <Container>
        <LogoMenu>
          <Logo />
          <BurgerNavCloseBtn onClick={close} />
        </LogoMenu>
        <UserAuthMenu>
          {isMobile && isUserAuthorized && !isUserRefreshing && <UserNav />}
          {isMobile && !isUserAuthorized && <AuthNav />}
        </UserAuthMenu>
        <Nav />
      </Container>
    </BurgerNavMenu>
  );
};

BurgerNav.propTypes = {
  close: PropTypes.func.isRequired,
};
