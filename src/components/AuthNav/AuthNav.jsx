import { ROUTES } from 'utils/appKeys';

import { AuthNavList, AuthNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <AuthNavList>
        <li>
          <AuthNavLink to={ROUTES.LOGIN}>Login</AuthNavLink>
        </li>
        <li>
          <AuthNavLink to={ROUTES.REGISTER}>Registration</AuthNavLink>
        </li>
      </AuthNavList>
    </>
  );
};
