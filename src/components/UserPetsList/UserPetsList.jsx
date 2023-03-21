import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box } from 'components/common/shared.styled';
import {
  List,
  PetImg,
  PetInfo,
  DeleteBtn,
  ListItem,
  NameBox,
} from './UserPetsList.styled';
import { DeleteIcon } from 'components/DeleteIcon/DeleteIcon';

export const UserPetsList = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    async function getPets() {
      try {
        const response = await axios('/api/users', {
          signal: controller.signal,
          params: {},
        });
        setPets(response.data.pets);
      } catch (error) {
        console.error(error);
      }
    }
    getPets();
    return () => {
      controller.abort();
    };
  }, [pets]);
  const handleDeletePet = async id => {
    await deletePetFromList(id);
    setPets(pets.filter(pet => pet.id !== id));
  };
  async function deletePetFromList(id) {
    try {
      await axios.delete('/api/users/pets', {
        params: { petId: id },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return pets.length > 0 ? (
    <Box>
      <List>
        {pets.map(({ id, photo, breed, name, birthday, comment }) => {
          return (
            <ListItem key={id}>
              <PetImg src={photo} alt={name} />
              <PetInfo>
                <li>
                  <NameBox>
                    <Box>
                      <span>Name: </span>
                      {name}
                    </Box>
                    <DeleteBtn onClick={handleDeletePet(id)}>
                      <DeleteIcon />
                    </DeleteBtn>
                  </NameBox>
                </li>
                <li>
                  <span>Date of birth: </span>
                  {birthday}
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
  ) : (
    <Box>
      <p> No pets... </p>
    </Box>
  );
};
