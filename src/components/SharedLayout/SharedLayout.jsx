import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';

import { Container, Loader } from 'components/common';
import { Header } from 'components';

export default function SharedLayout() {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
