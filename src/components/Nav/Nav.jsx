import { useParams } from 'react-router-dom';
import { ROUTES } from 'utils/appKeys';
import { NaviList, NaviLink } from './Nav.styled';

export const Nav = () => {
  const { categoryName } = useParams();

  return (
    <nav>
      <NaviList>
        <li>
          <NaviLink to={ROUTES.NEWS}>News</NaviLink>
        </li>
        <li>
          <NaviLink
            to={ROUTES.NOTICES}
            className={
              categoryName === 'lost-found' ||
              categoryName === 'for-free' ||
              categoryName === 'favorite' ||
              categoryName === 'own'
                ? 'active'
                : ''
            }
          >
            Find pet
          </NaviLink>
        </li>
        <li>
          <NaviLink to={ROUTES.FRIENDS}>Our friends</NaviLink>
        </li>
      </NaviList>
    </nav>
  );
};
