import { LogOutBtn, LogoutIcon } from './Logout.styled';
import { useLogoutUserMutation } from 'redux/slices/usersAPISlice';
// import { logoutUser } from 'redux/hooks/logoutUser';
export const Logout = () => {
  const [logout] = useLogoutUserMutation();

  // const onClickHandler = () => {
  //   (async () => {
  //     await logoutUser();
  //   })();
  // };
  return (
    <LogOutBtn onClick={logout}>
      <LogoutIcon />
      Log Out
    </LogOutBtn>
  );
};
