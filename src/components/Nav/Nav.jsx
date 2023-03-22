import { ROUTES } from 'utils/appKeys';

import { NaviList, NaviLink } from './Nav.styled';

export const Nav = () => {
  return (
    <nav>
      <NaviList>
        <li>
          <NaviLink to={ROUTES.NEWS}>News</NaviLink>
        </li>
        <li>
          <NaviLink to={ROUTES.NOTICES}>Find pet</NaviLink>
        </li>
        <li>
          <NaviLink to={ROUTES.FRIENDS}>Our friends</NaviLink>
        </li>
      </NaviList>
    </nav>
  );
};
