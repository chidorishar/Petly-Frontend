import { Box } from 'components/common/shared.styled';
import { PetsTitle, AddPetBtn } from './PetsData.styled';
import { BsFillPlusCircleFill } from 'react-icons/bs';

export const PetsData = () => {
  return (
    <Box>
      <Box>
        <PetsTitle>My pets</PetsTitle>
        <AddPetBtn>
          Add pet <BsFillPlusCircleFill />
        </AddPetBtn>
      </Box>
      {/* insert UserPetsList component */}
    </Box>
  );
};
