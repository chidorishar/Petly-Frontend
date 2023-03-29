import { ROUTES } from 'utils/appKeys';
import { useTranslation } from 'react-i18next';

import { NaviList, NaviLink } from './Nav.styled';

export const Nav = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <NaviList>
        <li>
          <NaviLink to={ROUTES.NEWS}>{t('main.news')}</NaviLink>
        </li>
        <li>
          <NaviLink to={ROUTES.NOTICES}>{t('main.find')}</NaviLink>
        </li>
        <li>
          <NaviLink to={ROUTES.FRIENDS}>{t('main.friends')}</NaviLink>
        </li>
      </NaviList>
    </nav>
  );
};
