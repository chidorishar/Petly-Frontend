import { useSelector } from 'react-redux';

import { selectIsUserAuthorized, selectUserData } from 'redux/selectors';

export const useAuth = () => {
  const isUserAuthorized = useSelector(selectIsUserAuthorized);
  const userData = useSelector(selectUserData);

  return {
    isUserAuthorized,
    userData,
  };
};
