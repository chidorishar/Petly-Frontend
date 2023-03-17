import { useAuth } from 'redux/hooks/getAuth';

import { ContainerFrameCommon } from 'components/common/shared.styled';
import { HeaderLink, LinksListItem } from './Navigation.styled';

const LINK_TYPES = {
  protected: 'PROT',
  private: 'PRIVATE',
};

const LINKS = [
  { name: 'Register', to: '/', type: LINK_TYPES.protected },
  { name: 'Login', to: 'login', type: LINK_TYPES.protected },
  { name: 'Contacts', to: 'contacts', type: LINK_TYPES.private },
];

export function Navigation() {
  const { isUserAuthorized } = useAuth();

  return (
    <nav>
      <ContainerFrameCommon as="ul">
        {LINKS.map(({ to, name, type }) => (
          <LinksListItem key={name}>
            <HeaderLink
              className={
                (!isUserAuthorized && type === LINK_TYPES.private
                  ? 'disabled'
                  : '') +
                (isUserAuthorized && type === LINK_TYPES.protected
                  ? 'disabled'
                  : '')
              }
              to={to}
            >
              {name}
            </HeaderLink>
          </LinksListItem>
        ))}
      </ContainerFrameCommon>
    </nav>
  );
}
