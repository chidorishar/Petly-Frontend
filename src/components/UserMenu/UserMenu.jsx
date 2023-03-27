import { useAuth } from 'redux/hooks/getAuth';
import { useLogoutUserMutation } from 'redux/slices/usersAPISlice';

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

  return (
    <MenuFrame>
      <UserGreeting>
        Hello👋, <UserName>{userData?.name}</UserName>
      </UserGreeting>
      <LogoutButton
        onClick={logout}
        bgColor={theme.colors.textColoredSecondary}
        hoverColor={theme.colors.warning}
      >
        Logout
      </LogoutButton>
    </MenuFrame>
  );
}
