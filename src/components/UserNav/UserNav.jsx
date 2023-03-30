import { UserNavBox, UserNavLink, UserNavIcon } from './UserNav.styled';
import AccountIcon from './account.svg';
import { useTranslation } from 'react-i18next';

export const UserNav = () => {
  const { t } = useTranslation();
  return (
    <UserNavBox>
      <UserNavLink to="/user">
        <UserNavIcon src={AccountIcon} alt="account" />
        {t('user.account')}
      </UserNavLink>
    </UserNavBox>
  );
};
