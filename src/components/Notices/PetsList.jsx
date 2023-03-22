import { Box } from 'components/common/shared.styled';
import { RiDeleteBinFill } from 'react-icons/ri';
import {
  List,
  PetImg,
  CategoryTitle,
  ItemTitle,
  PetInfo,
  LearnMoreBtn,
  DeleteBtn,
  DeleteBtnTitle,
  AddToFavBtn,
  FavoriteIcon,
  BottomBox,
} from './PetsList.styled';

export const PetsList = () => {
  const petsFilteredList = [
    {
      id: 1,
      title: 'cute dog looking for a home',
      petImg: 'https://placehold.co/200x288/orange/white',
      breed: 'Pomeranian',
      place: 'Lviv',
      age: 1679092817793,
    },
    {
      id: 2,
      title: 'cute dog looking for a home',
      petImg: 'https://placehold.co/200x288',
      breed: 'Pomeranian',
      place: 'Lviv',
      age: 1679092817793,
    },
    {
      id: 3,
      title: 'cute dog looking for a home',
      petImg: 'https://placehold.co/200x288',
      breed: 'Pomeranian',
      place: 'Lviv',
      age: 1679092817793,
    },
    {
      id: 4,
      title: 'cute dog looking for a home',
      petImg: 'https://placehold.co/200x288',
      breed: 'Pomeranian',
      place: 'Lviv',
      age: 1679092817793,
    },
  ];
  const categoryName = 'in good hands';
  const dogOwner = true;
  return (
    <List>
      {petsFilteredList.map(({ id, title, petImg, breed, place, age }) => {
        return (
          <Box
            key={id}
            position="relative"
            backgroundColor="#8ba76b"
            borderBottomLeftRadius="20px"
            borderBottomRightRadius="20px"
            boxShadow="7px 4px 14px rgba(49, 21, 4, 0.07)"
          >
            <PetImg src={petImg} alt={breed} />
            <Box
              display="flex"
              position="absolute"
              width="100%"
              justifyContent="space-between"
              top="12px"
              alignItems="center"
            >
              <CategoryTitle>{categoryName}</CategoryTitle>
              <AddToFavBtn>
                <FavoriteIcon />
              </AddToFavBtn>
            </Box>
            <Box padding="20px 20px 0px 20px" mb="50px">
              <ItemTitle>{title}</ItemTitle>
              <Box display="flex" marginTop="20px">
                <Box marginRight="40px">
                  <PetInfo>
                    <li>Breed:</li>
                    <li>Place:</li>
                    <li>Age:</li>
                  </PetInfo>
                </Box>
                <PetInfo>
                  <li>{breed}</li>
                  <li>{place}</li>
                  <li>{age}</li>
                </PetInfo>
              </Box>
            </Box>
            <BottomBox>
              <LearnMoreBtn>Learn more</LearnMoreBtn>
              {dogOwner && (
                <DeleteBtn>
                  <DeleteBtnTitle>Delete</DeleteBtnTitle> <RiDeleteBinFill />
                </DeleteBtn>
              )}
            </BottomBox>
          </Box>
        );
      })}
    </List>
  );
};
