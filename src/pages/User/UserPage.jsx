import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
import { UserContainer } from './UserPage.styled';

export const UserPage = () => {
  return (
    <>
      <UserContainer>
        <UserData />
        {/* <Logout /> */}
        <PetsData />
      </UserContainer>
    </>
  );
};
