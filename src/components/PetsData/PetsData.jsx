import { Box } from 'components/common/Box/Box.styled';
import { PetsTitle, AddPetBtn, DataTopBox, AddBox } from './PetsData.styled';
import { BsFillPlusCircleFill } from 'react-icons/bs';

export const PetsData = () => {
  const handleAddPet = () => {};
  return (
    <Box>
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
