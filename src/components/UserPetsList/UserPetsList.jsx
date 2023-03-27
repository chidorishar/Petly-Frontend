import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { dateConverter } from 'utils';

import { Box } from 'components/common/Box/Box.styled';
import {
  List,
  PetImg,
  PetInfo,
  DeleteBtn,
  ListItem,
  NameBox,
} from './UserPetsList.styled';
import { DeleteIcon } from 'components/DeleteIcon/DeleteIcon';

async function deletePetFromList(petId) {
  let axResponse = null;

  try {
    axResponse = await axios.delete(`/api/users/pets/${petId}`);
  } catch ({ response }) {
    console.log(response.status);
    toast.error(
      response.status === 400 ? 'Unauthorized!' : 'Something went wrong'
    );
  }

  return axResponse;
}

export const UserPetsList = ({ pets, onPetDeleted }) => {
  const handleDeletePet = async id => {
    const resp = await deletePetFromList(id);

    if (resp) {
      toast.success(`Pet deleted`);
      onPetDeleted();
    }
  };

  return pets.length ? (
    <List>
      {pets.map(({ _id: id, photo, breed, name, birthday, comment }) => {
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
                  <DeleteBtn onClick={() => handleDeletePet(id)}>
                    <DeleteIcon />
                  </DeleteBtn>
                </NameBox>
              </li>
              <li>
                <span>Date of birth: </span>
                {dateConverter(birthday, 'dd.MM.yyyy')}
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
  ) : (
    <Box>
      <p> No pets... </p>
    </Box>
  );
};

UserPetsList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ),
  onPetDeleted: PropTypes.func.isRequired,
};
