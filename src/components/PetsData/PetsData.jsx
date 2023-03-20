import { Box } from 'components/common/shared.styled';
import { PetsTitle, AddPetBtn } from './PetsData.styled';

export const PetsData = () => {
  return (
    <Box>
      <Box>
        <PetsTitle>My pets</PetsTitle>
        <AddPetBtn>Add pet</AddPetBtn>
      </Box>
      {/* insert UserPetsList component */}
    </Box>
  );
};
