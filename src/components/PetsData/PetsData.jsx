import { Box } from 'components/common/shared.styled';
import { PetsTitle, AddPetBtn, DataTopBox, AddBox } from './PetsData.styled';
import { BsFillPlusCircleFill } from 'react-icons/bs';

export const PetsData = () => {
  return (
    <Box>
      <DataTopBox>
        <PetsTitle>My pets:</PetsTitle>
        <AddBox>
          <span>Add pet</span>
          <AddPetBtn>
            <BsFillPlusCircleFill />
          </AddPetBtn>
        </AddBox>
      </DataTopBox>
      {/* insert UserPetsList component */}
    </Box>
  );
};
