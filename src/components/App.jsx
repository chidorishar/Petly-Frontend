import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { store } from 'redux/store';
import {
  useLazyCurrentUserQuery,
  useRefreshUserMutation,
} from 'redux/slices/usersAPISlice';

import { GlobalStyle, ToastContainer } from 'utils';
import { ROUTES } from 'utils/appKeys';
import SharedLayout from './SharedLayout/SharedLayout';

import { RestrictedRoute } from './ProtectedRoute';
import { PrivateRoute } from './PrivateRoute';

const NewsPage = lazy(() => import('../pages/News/NewsPage'));
const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriends/OurFriendsPage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const UserMenu = lazy(() => import('./UserMenu/UserMenu'));

export const App = () => {
  const [getCurrentUser, { isLoading: isRefreshingUserData }] =
    useLazyCurrentUserQuery();
  const [getAccessToken] = useRefreshUserMutation();

  useEffect(() => {
    const { accessToken, refreshToken } = store.getState().auth;

    (async () => {
      if (accessToken) {
        const response = await getCurrentUser();

        if (response?.error && refreshToken) {
          await getAccessToken(refreshToken);
        }
      }
    })();
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
              <Route index element={<></>} />
              <Route
                index
                element={
                  <PrivateRoute redirectTo="/" component={<UserMenu />} />
                }
              />

              {/* ⏬ WRITE your PAGES below this comment ⏬*/}
              <Route path={ROUTES.NEWS} element={<NewsPage />} />
              <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
              <Route
                path={ROUTES.LOGIN}
                element={
                  <RestrictedRoute redirectTo="/" component={<LoginPage />} />
                }
              />
              <Route path={ROUTES.FRIENDS} element={<OurFriendsPage />} />
              <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
              <Route path="*" element={<></>} />
            </>
          )}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
