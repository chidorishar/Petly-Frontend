// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// import { useAuth } from 'redux/hooks/getAuth';
// import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';

// import { Container } from 'components/common/shared.styled';
import { Header } from './SharedLayout.styled';
import ModalAddPet from 'components/ModalAddsPet/ModalAddsPet';

export default function SharedLayout() {
  // const { isUserAuthorized } = useAuth();

  return (
    <>
      <Header>
        {/* <Container> */}
        {/* <Navigation /> */}

        {/* {isUserAuthorized && <UserMenu />} */}
        {/* </Container> */}
      </Header>

      <ModalAddPet />

      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* <Container /> */}
      <Outlet />
      {/* <Suspense/> */}
    </>
  );
}
