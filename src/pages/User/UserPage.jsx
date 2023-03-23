import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
import { UserPageContainer, UserInfoConatainer } from './UserPage.styled';

export const UserPage = () => {
  return (
    <UserPageContainer>
      <UserInfoConatainer>
        <UserData />
        {/* <Logout/> */}
      </UserInfoConatainer>

      <PetsData />
    </UserPageContainer>
  );
};
