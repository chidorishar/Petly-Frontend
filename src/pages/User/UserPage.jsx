import { useEffect, useState } from 'react';
import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
import { useTranslation } from 'react-i18next';

import {
  UserPageSection,
  UserPageContainer,
  UserInfoContainer,
  UserTitle,
  UserWrapper,
} from './UserPage.styled';
import { getUser } from 'utils/network/getUser';

import { useSelector } from 'react-redux';
import { selectUserAccessToken } from 'redux/selectors';
import axios from 'axios';

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const userToken = useSelector(selectUserAccessToken);

  const getUserData = async () => {
    if (userToken)
      axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
    else axios.defaults.headers.common['Authorization'] = null;

    const { user } = await getUser();
    setUserData(user);
  };

  const onUserDataUpdated = async () => {
    await getUserData();
  };

  const onPetDeleted = async () => {
    await getUserData();
  };

  useEffect(() => {
    getUserData();
  }, []);

  const { t } = useTranslation();

  return (
    <UserPageSection>
      <UserPageContainer>
        <UserInfoContainer>
          <UserTitle>{t('user.info')}</UserTitle>
          {userData && (
            <UserWrapper>
              <UserData user={userData} onUserDataUpdated={onUserDataUpdated} />
            </UserWrapper>
          )}
        </UserInfoContainer>
        {userData && (
          <PetsData pets={userData.pets} onPetListChanged={onPetDeleted} />
        )}
      </UserPageContainer>
    </UserPageSection>
  );
};

export default UserPage;
