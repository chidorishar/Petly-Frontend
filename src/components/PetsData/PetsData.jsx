import { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { BsFillPlusCircleFill } from 'react-icons/bs';

import { Box } from 'components/common/Box/Box.styled';
import { PetsTitle, AddPetBtn, DataTopBox, AddBox } from './PetsData.styled';
import { UserPetsList } from 'components/UserPetsList/UserPetsList';
import { ModalAddPet } from 'components/ModalAddsPet/ModalAddsPet';

export const PetsData = ({ pets, onPetDeleted }) => {
  const [isModalAddPetShown, setShowModalAddPet] = useState(false);

  const handleAddPetClick = () => {
    setShowModalAddPet(true);
  };

  return (
    <Box flexGrow={1}>
      {/* MODAL WINDOW */}
      <DataTopBox>
        <PetsTitle>My pets:</PetsTitle>
        <AddBox>
          <span>Add pet</span>
          <AddPetBtn onClick={handleAddPetClick}>
            <BsFillPlusCircleFill />
          </AddPetBtn>
        </AddBox>
      </DataTopBox>
      <UserPetsList pets={pets} onPetDeleted={onPetDeleted} />
      {isModalAddPetShown &&
        createPortal(
          <ModalAddPet setModalStateInParent={setShowModalAddPet} />,
          document.body
        )}
    </Box>
  );
};

PetsData.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onPetDeleted: PropTypes.func.isRequired,
};
