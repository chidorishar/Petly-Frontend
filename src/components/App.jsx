import { lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { store } from 'redux/store';
import { useLazyRefreshUserQuery } from 'redux/slices/usersAPISlice';

import { GlobalStyle, ToastContainer } from 'utils';
import { ROUTES } from 'utils/appKeys';
import SharedLayout from './SharedLayout/SharedLayout';
import { ModalNotice } from './ModalNotice/ModalNotice';

// import { RestrictedRoute } from './ProtectedRoute';
// import { PrivateRoute } from './PrivateRoute';
// TODO: Add lazy loading.
const NewsPage = lazy(() => import('../pages/News/NewsPage'));
const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriends/OurFriendsPage'));

export const App = () => {
  const [modalActive, setModalActive] = useState(true);
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
              <Route index element={<></>} />

              {/* ⏬ WRITE your PAGES below this comment ⏬*/}
              <Route path={ROUTES.NEWS} element={<NewsPage />} />
              <Route path={ROUTES.FRIENDS} element={<OurFriendsPage />} />
              <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
              <Route path="*" element={<></>} />
            </>
          )}
          <Route
            path="/modal"
            element={
              <ModalNotice active={modalActive} setActive={setModalActive} />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
