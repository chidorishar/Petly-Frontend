import { useEffect, useState } from 'react';
import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';

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

  return (
    <UserPageSection>
      <UserPageContainer>
        <UserInfoContainer>
          <UserTitle>My information:</UserTitle>
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
