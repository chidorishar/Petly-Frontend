import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import i18n from 'i18next';

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
import { useTranslation } from 'react-i18next';

async function deletePetFromList(petId) {
  let axResponse = null;

  try {
    axResponse = await axios.delete(`/api/users/pets/${petId}`);
  } catch ({ response }) {
    console.log(response.status);
    toast.error(
      response.status === 400
        ? i18n.t('notification.Unauthorized')
        : i18n.t('notification.someWrong')
    );
  }

  return axResponse;
}

export const UserPetsList = ({ pets, onPetDeleted }) => {
  const { t } = useTranslation();

  const handleDeletePet = async id => {
    const resp = await deletePetFromList(id);

    if (resp) {
      toast.success(t('notification.petDel'));
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
                    <span>{t('user.petName')} </span>
                    {name}
                  </Box>
                  <DeleteBtn onClick={() => handleDeletePet(id)}>
                    <DeleteIcon />
                  </DeleteBtn>
                </NameBox>
              </li>
              <li>
                <span>{t('user.petBirth')} </span>
                {dateConverter(birthday, 'dd.MM.yyyy')}
              </li>
              <li>
                <span>{t('user.petBreed')} </span>
                {breed}
              </li>
              <li>
                <span>{t('user.petComm')} </span>
                {comment}
              </li>
            </PetInfo>
          </ListItem>
        );
      })}
    </List>
  ) : (
    <Box>
      <List>
        <ListItem key={0}>
          <PetInfo>
            <li>
              <Box m="0 40px" fontSize="ml">
                <span>{t('user.noPets')}</span>
              </Box>
            </li>
          </PetInfo>
        </ListItem>
      </List>
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
