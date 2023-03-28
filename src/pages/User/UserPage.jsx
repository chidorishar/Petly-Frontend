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
import { getUser } from 'redux/hooks/getUser';

const UserPage = () => {
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
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
          <PetsData pets={userData.pets} onPetDeleted={onPetDeleted} />
        )}
      </UserPageContainer>
    </UserPageSection>
  );
};

export default UserPage;
