import { PropTypes } from 'prop-types';
import { AiFillHeart } from 'react-icons/ai';
import {
  AddToFavoriteBtn,
  BackDrop,
  CategoryBox,
  ImgBox,
  ModalBox,
  PetBox,
  PetComments,
  PetInfo,
  PetInfoItem,
  PetInfoItemTitle,
  PetTitle,
  PhoneLink,
} from './ModalNotice.styled';

export const ModalNotice = ({ pet, categoryName }) => {
  const {
    petTitle = '',
    petImg = '',
    petId = '',
    petName = '',
    petBirthdayDate = '',
    petBreed = '',
    petLocation = '',
    petSex = '',
    userEmail = '',
    userPhone = '',
    petComments = '',
  } = pet;
  return (
    <BackDrop>
      <ModalBox>
        <PetBox>
          <ImgBox>
            <img src={petImg} alt={petName} />
            <CategoryBox>
              <p>{categoryName}</p>
            </CategoryBox>
          </ImgBox>
          <PetTitle>{petTitle}</PetTitle>
          <PetInfo>
            <PetInfoItem>
              <PetInfoItemTitle>Name:</PetInfoItemTitle>
              {petName}
            </PetInfoItem>
            <PetInfoItem>
              <PetInfoItemTitle>Birthday:</PetInfoItemTitle>
              {petBirthdayDate}
            </PetInfoItem>
            <PetInfoItem>
              <PetInfoItemTitle>Breed:</PetInfoItemTitle>
              {petBreed}
            </PetInfoItem>
            <PetInfoItem>
              <PetInfoItemTitle>Location:</PetInfoItemTitle>
              {petLocation}
            </PetInfoItem>
            <PetInfoItem>
              <PetInfoItemTitle>The sex:</PetInfoItemTitle>
              {petSex}
            </PetInfoItem>
            <PetInfoItem>
              <PetInfoItemTitle>Email:</PetInfoItemTitle>
              {userEmail}
            </PetInfoItem>
            <PetInfoItem>
              <PetInfoItemTitle>Phone:</PetInfoItemTitle>
              {userPhone}
            </PetInfoItem>
          </PetInfo>
          <PetComments>
            <span>Comments</span>
            {petComments}
          </PetComments>
          <PhoneLink>
            <a href={`tel:${userPhone}`}>Contact</a>
          </PhoneLink>
          <AddToFavoriteBtn>
            Add to <AiFillHeart />
          </AddToFavoriteBtn>
        </PetBox>
      </ModalBox>
    </BackDrop>
  );
};
ModalNotice.propTypes = {
  pet: PropTypes.shape({
    petId: PropTypes.Number.isRequired,
    petImg: PropTypes.string.isRequired,
    petTitle: PropTypes.string.isRequired,
    petName: PropTypes.string.isRequired,
    petBirthdayDate: PropTypes.string.isRequired,
    petBreed: PropTypes.string.isRequired,
    petLocation: PropTypes.string.isRequired,
    petSex: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    userPhone: PropTypes.string.isRequired,
    petComments: PropTypes.string.isRequired,
  }).isRequired,
  categoryName: PropTypes.string.isRequired,
};
