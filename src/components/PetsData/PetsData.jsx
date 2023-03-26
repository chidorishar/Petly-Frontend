import { Box } from 'components/common/Box/Box.styled';
import { PetsTitle, AddPetBtn, DataTopBox, AddBox } from './PetsData.styled';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { UserPetsList } from 'components/UserPetsList/UserPetsList';

export const PetsData = ({ pets, onPetDeleted }) => {
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
      <UserPetsList pets={pets} onPetDeleted={onPetDeleted} />
    </Box>
  );
};

PetsData.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onPetDeleted: PropTypes.func.isRequired,
};
