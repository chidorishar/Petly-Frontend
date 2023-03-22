import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { store } from 'redux/store';
import { useLazyRefreshUserQuery } from 'redux/slices/usersAPISlice';
import { ROUTES } from 'utils/appKeys';

import SharedLayout from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './ProtectedRoute';

import { NoticesPage } from 'pages/NoticesPage';
// import { PrivateRoute } from './PrivateRoute';
// TODO: Add lazy loading.
import RegisterPage from 'pages/Register/RegisterPage';
const OurFriendsPage = lazy(() => import('../pages/OurFriends/OurFriendsPage'));

import { GlobalStyle } from 'utils';

export const App = () => {
  const [refreshUser, { isLoading: isRefreshingUserData }] =
    useLazyRefreshUserQuery();

  useEffect(() => {
    const { token } = store.getState().auth;

    token && refreshUser();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {isRefreshingUserData ? (
            <Route index element={<p>Retrieving data...</p>} />
          ) : (
            <>
              {/* HOMEPAGE */}
              <Route
                index
                element={<RestrictedRoute redirectTo="/" component={<></>} />}
              />

              {/* ⏬ WRITE your PAGES below this comment ⏬*/}
              <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
              <Route path={ROUTES.FRIENDS} element={<OurFriendsPage />} />
              <Route path="*" element={<></>} />
            </>
          )}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
