import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from 'redux/hooks/getAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Container } from 'components/common';
import { Header } from 'components';
import NewsPage from '../../pages/News/NewsPage';
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
      <NewsPage />

      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
}
