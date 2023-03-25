import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { store } from 'redux/store';
import { useLazyRefreshUserQuery } from 'redux/slices/usersAPISlice';

import { GlobalStyle, ToastContainer } from 'utils';
import { ROUTES } from 'utils/appKeys';

import SharedLayout from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './ProtectedRoute';
// import { PrivateRoute } from './PrivateRoute';

import { UserMenu } from './UserMenu/UserMenu';

const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const NewsPage = lazy(() => import('../pages/News/NewsPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriends/OurFriendsPage'));

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
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {isRefreshingUserData ? (
            <Route index element={<p>Retrieving data...</p>} />
          ) : (
            <>
              {/* HOMEPAGE */}
              <Route index element={<UserMenu />} />

              {/* ⏬ WRITE your PAGES below this comment ⏬*/}
              <Route
                path={ROUTES.LOGIN}
                element={
                  <RestrictedRoute redirectTo="/" component={<LoginPage />} />
                }
              />
              <Route
                path={ROUTES.REGISTER}
                element={
                  <RestrictedRoute
                    redirectTo="/"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route path={ROUTES.NEWS} element={<NewsPage />} />
              <Route path={ROUTES.FRIENDS} element={<OurFriendsPage />} />
            </>
          )}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
