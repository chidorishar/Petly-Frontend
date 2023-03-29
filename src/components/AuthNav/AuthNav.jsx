import { ROUTES } from 'utils/appKeys';

import { AuthNavList, AuthNavLink } from './AuthNav.styled';
import { useTranslation } from 'react-i18next';

export const AuthNav = () => {
  const { t } = useTranslation();
  return (
    <>
      <AuthNavList>
        <li>
          <AuthNavLink to={ROUTES.LOGIN}>{t('login.login')}</AuthNavLink>
        </li>
        <li>
          <AuthNavLink to={ROUTES.REGISTER}>
            {' '}
            {t('registration.registration')}
          </AuthNavLink>
        </li>
      </AuthNavList>
    </>
  );
};
