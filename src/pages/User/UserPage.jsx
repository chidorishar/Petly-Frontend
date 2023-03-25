import { useEffect, useState } from 'react';
// import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
import {
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

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserPageContainer>
      <UserInfoContainer>
        <UserTitle>My information:</UserTitle>
        {userData && (
          <UserWrapper>
            <UserData user={userData} onUserDataUpdated={onUserDataUpdated} />
          </UserWrapper>
        )}
      </UserInfoContainer>

      {/* <PetsData /> */}
    </UserPageContainer>
  );
};

export default UserPage;
