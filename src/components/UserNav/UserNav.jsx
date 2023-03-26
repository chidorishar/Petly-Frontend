import { UserNavBox, UserNavLink, UserNavIcon } from './UserNav.styled';
import AccountIcon from './account.svg';
import { ROUTES } from 'utils/appKeys';

export const UserNav = () => {
  return (
    <UserNavBox>
      <UserNavLink to={ROUTES.PROFILE}>
        <UserNavIcon src={AccountIcon} alt="account" />
        Account
      </UserNavLink>
    </UserNavBox>
  );
};
