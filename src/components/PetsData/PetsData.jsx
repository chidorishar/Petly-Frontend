import { Box } from 'components/common/Box/Box.styled';
import { PetsTitle, AddPetBtn, DataTopBox, AddBox } from './PetsData.styled';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';

export const PetsData = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddPet = () => {
    setShowModal(true);
  };

  return (
    <Box>
      {/* MODAL WINDOW */}
      {showModal && <></>}
      <DataTopBox>
        <PetsTitle>My pets:</PetsTitle>
        <AddBox>
          <span>Add pet</span>
          <AddPetBtn onClick={handleAddPet}>
            <BsFillPlusCircleFill />
          </AddPetBtn>
        </AddBox>
      </DataTopBox>
      {/* insert UserPetsList component */}
    </Box>
  );
};
