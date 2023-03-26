import { lazy, useEffect } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { store } from 'redux/store';
import {
  useLazyCurrentUserQuery,
  useRefreshUserMutation,
} from 'redux/slices/usersAPISlice';

import { GlobalStyle, ToastContainer } from 'utils';
import { ROUTES } from 'utils/appKeys';

import { RestrictedRoute } from './ProtectedRoute';
import { PrivateRoute } from './PrivateRoute';

import SharedLayout from './SharedLayout/SharedLayout';

const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const NewsPage = lazy(() => import('../pages/News/NewsPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriends/OurFriendsPage'));
const UserPage = lazy(() => import('../pages/User/UserPage'));

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
              <Route
                path={ROUTES.USERPAGE}
                element={
                  <PrivateRoute redirectTo="/" component={<UserPage />} />
                }
              />
              <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
              <Route path="*" element={<></>} />
            </>
          )}
        </Route>
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
};
