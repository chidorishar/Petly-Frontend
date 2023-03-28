import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from 'redux/hooks/getAuth';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { ModalAddPet } from 'components/ModalAddsPet/ModalAddsPet';
import { Container, Loader } from 'components/common';
import { Header } from 'components';

export default function SharedLayout() {
  const { isUserAuthorized } = useAuth();

  return (
    <>
      <Header>
        <Container>
          <Navigation />
          {isUserAuthorized && <UserMenu />}
        </Container>
      </Header>

      <ModalAddPet />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
