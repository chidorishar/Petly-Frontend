import { UserNavBox, UserNavLink, UserNavIcon } from './UserNav.styled';
import AccountIcon from './account.svg';
import { ROUTES } from 'utils/appKeys';
import { useTranslation } from 'react-i18next';

export const UserNav = () => {
  const { t } = useTranslation();
  return (
    <UserNavBox>
      <UserNavLink to={ROUTES.PROFILE}>
        <UserNavIcon src={AccountIcon} alt="account" />
        {t('user.account')}
      </UserNavLink>
    </UserNavBox>
  );
};
