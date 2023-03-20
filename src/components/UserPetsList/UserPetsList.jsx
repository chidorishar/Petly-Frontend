import { Box } from 'components/common/shared.styled';
import {
  List,
  PetImg,
  PetInfo,
  DeleteBtn,
  ListItem,
  NameBox,
} from './UserPetsList.styled';
import { RiDeleteBinFill } from 'react-icons/ri';
export const UserPetsList = () => {
  const petsFilteredList = [
    {
      id: 1,
      comment: 'cute dog looking for a home',
      petImg: 'https://placehold.co/240x240/orange/white',
      breed: 'Pomeranian',
      name: 'Lviv',
      age: 1679092817793,
    },
    {
      id: 2,
      comment: 'cute dog looking for a home',
      petImg: 'https://placehold.co/240x240',
      breed: 'Pomeranian',
      name: 'Lviv',
      age: 1679092817793,
    },
    {
      id: 3,
      comment: 'cute dog looking for a home',
      petImg: 'https://placehold.co/240x240',
      breed: 'Pomeranian',
      name: 'Lviv',
      age: 1679092817793,
    },
  ];
  return (
    <Box>
      <List>
        {petsFilteredList.map(({ id, petImg, breed, name, age, comment }) => {
          return (
            <ListItem key={id}>
              <PetImg src={petImg} alt={name} />
              <PetInfo>
                <li>
                  <NameBox>
                    <Box>
                      <span>Name: </span>
                      {name}
                    </Box>
                    <DeleteBtn>
                      <RiDeleteBinFill />
                    </DeleteBtn>
                  </NameBox>
                </li>
                <li>
                  <span>Date of birth: </span>
                  {age}
                </li>
                <li>
                  <span>Breed: </span>
                  {breed}
                </li>
                <li>
                  <span>Comments: </span>
                  {comment}
                </li>
              </PetInfo>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
