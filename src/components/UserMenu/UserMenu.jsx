import { useAuth } from 'redux/hooks/getAuth';
import { useLogoutUserMutation } from 'redux/slices/usersAPISlice';
import { useTranslation } from 'react-i18next';

import { theme } from 'utils/theme';
import {
  LogoutButton,
  MenuFrame,
  UserGreeting,
  UserName,
} from './UserMenu.styled';

export function UserMenu() {
  const { userData } = useAuth();
  const [logout] = useLogoutUserMutation();
  const { t } = useTranslation();

  return (
    <MenuFrame>
      <UserGreeting>
        {t('user.hello')}👋, <UserName>{userData?.name}</UserName>
      </UserGreeting>
      <LogoutButton
        onClick={logout}
        bgColor={theme.colors.textColoredSecondary}
        hoverColor={theme.colors.warning}
      >
        {t('user.logout')}
      </LogoutButton>
    </MenuFrame>
  );
}
