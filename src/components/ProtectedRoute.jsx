import { Navigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { useAuth } from 'redux/hooks/getAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isUserAuthorized } = useAuth();

  return isUserAuthorized ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};
