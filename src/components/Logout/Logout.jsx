import { LogOutBtn, LogoutIcon } from './Logout.styled';
import { useLogoutUserMutation } from 'redux/slices/usersAPISlice';
import { useTranslation } from 'react-i18next';

export const Logout = () => {
  const [logout] = useLogoutUserMutation();
  const { t } = useTranslation();

  return (
    <LogOutBtn onClick={logout}>
      <LogoutIcon />
      {t('notices.logout')}
    </LogOutBtn>
  );
};
