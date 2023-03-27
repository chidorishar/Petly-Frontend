import { ROUTES } from 'utils/appKeys';
// import LanguageSwitch from 'components/common/LanguageSwitch/LanguageSwitch';
import { useTranslation } from 'react-i18next';

import { NaviList, NaviLink } from './Nav.styled';

export const Nav = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <NaviList>
        <li>
          <NaviLink to={ROUTES.NEWS}>{t('news', { ns: 'main' })}</NaviLink>
        </li>
        <li>
          <NaviLink to={ROUTES.NOTICES}>{t('find', { ns: 'main' })}</NaviLink>
        </li>
        <li>
          <NaviLink to={ROUTES.FRIENDS}>
            {t('friends', { ns: 'main' })}
          </NaviLink>
        </li>
        {/* <LanguageSwitch /> */}
      </NaviList>
    </nav>
  );
};
