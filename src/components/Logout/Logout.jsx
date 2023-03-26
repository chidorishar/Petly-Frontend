import { LogOutBtn, LogoutIcon } from './Logout.styled';
import { useLogoutUserMutation } from 'redux/slices/usersAPISlice';

export const Logout = () => {
  const [logout] = useLogoutUserMutation();

  return (
    <LogOutBtn onClick={logout}>
      <LogoutIcon />
      Log Out
    </LogOutBtn>
  );
};
