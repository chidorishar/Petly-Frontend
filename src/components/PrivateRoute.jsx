import { Navigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { useAuth } from 'redux/hooks/getAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isUserAuthorized, isUserRefreshing } = useAuth();
  const shouldRedirect = !isUserAuthorized && !isUserRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};
