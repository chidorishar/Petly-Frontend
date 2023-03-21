import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { store } from 'redux/store';
import { useLazyRefreshUserQuery } from 'redux/slices/usersAPISlice';

import SharedLayout from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './ProtectedRoute';
// import { PrivateRoute } from './PrivateRoute';

import { ROUTES } from 'utils/appKeys';

// TODO: Add lazy loading.
import RegisterPage from 'pages/Register/RegisterPage';

const OurFriendsPage = lazy(() => import('../pages/OurFriends/OurFriendsPage'));

export const App = () => {
  const [refreshUser, { isLoading: isRefreshingUserData }] =
    useLazyRefreshUserQuery();

  useEffect(() => {
    const { token } = store.getState().auth;

    token && refreshUser();
  }, []);

  return (
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
          </>
        )}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/services" element={<OurFriendsPage />} />
    </Routes>
  );
};
