import { lazy, useEffect, useState } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';

import { store } from 'redux/store';
import {
  useLazyCurrentUserQuery,
  useRefreshUserMutation,
} from 'redux/slices/usersAPISlice';

import { GlobalStyle, ToastContainer, lightTheme, darkTheme } from 'utils';
import { ROUTES } from 'utils/appKeys';

import { RestrictedRoute } from './ProtectedRoute';
import { PrivateRoute } from './PrivateRoute';

import SharedLayout from './SharedLayout/SharedLayout';
import { Loader } from './common';
import { ThemeProvider } from 'styled-components';

const NoticesPage = lazy(() => import('../pages/Notices/NoticesPage'));
const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const NewsPage = lazy(() => import('../pages/News/NewsPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriends/OurFriendsPage'));
const UserPage = lazy(() => import('../pages/User/UserPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

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

  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <ToastContainer />
        <button onClick={switchTheme}>Switch Theme</button>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            {isRefreshingUserData ? (
              <Route index element={<Loader />} />
            ) : (
              <>
                {/* HOMEPAGE */}
                <Route index element={<HomePage />} />

              {/* ⏬ WRITE your PAGES below this comment ⏬*/}
              <Route
                path={ROUTES.LOGIN}
                element={
                  <RestrictedRoute
                    redirectTo={ROUTES.USERPAGE}
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path={ROUTES.REGISTER}
                element={
                  <RestrictedRoute
                    redirectTo={ROUTES.USERPAGE}
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path={ROUTES.USERPAGE}
                element={
                  <PrivateRoute redirectTo="/" component={<UserPage />} />
                }
              />
              <Route path={ROUTES.NEWS} element={<NewsPage />} />
              <Route path={ROUTES.FRIENDS} element={<OurFriendsPage />} />
              <Route path={ROUTES.NOTICES} element={<NoticesPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
};
