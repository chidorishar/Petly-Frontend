import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import axios from 'axios';
import { BACKEND_BASE_URL } from 'utils/appKeys';

import { AiFillHeart } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import {
  AddToFavoriteBtn,
  BackDrop,
  CategoryBox,
  CloseBtn,
  ImgBox,
  InfoBox,
  ModalBox,
  PetBox,
  PetComments,
  PetInfo,
  PetInfoItem,
  PetInfoItemTitle,
  PetTitle,
  PhoneLink,
} from './ModalNotice.styled';

export const ModalNotice = ({ active, setActive }) => {
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    const handleKeyClose = e => {
      if (e.key === 'Escape') {
        setActive(false);
      }
    };
    document.addEventListener('keydown', handleKeyClose);
    return () => {
      document.removeEventListener('keydown', handleKeyClose);
    };
  }, []);

  const pet = {
    petTitle: 'Cute dog looking for a home',
    category: 'sell',
    petImg: 'https://placehold.co/240x340/orange/white',
    petId: '1',
    petName: 'Rich',
    petBirthdayDate: '21.09.21',
    petBreed: 'Pomeranian',
    petLocation: 'Lviv',
    petSex: 'male',
    userEmail: 'user@mail.com',
    userPhone: '+380505050505',
    price: '2333',
    isFavorite: false,
    petComments:
      'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem',
  };
  const addToFavorite = async id => {
    try {
      if (isAuth) {
        await axios.patch(`http://${BACKEND_BASE_URL}/api/notices/favorites/`, {
          params: {
            id: id,
          },
        });
      }
    } catch (error) {
      console.log(`Error update favorite list ${error}`);
    }
  };
  const removeFromFavorite = async id => {
    try {
      await axios.delete(`http://${BACKEND_BASE_URL}/api/notices/favorites/`, {
        params: {
          id: id,
        },
      });
    } catch (error) {
      console.log(`Error update favorite list ${error}`);
    }
  };
  return active ? (
    <BackDrop
      className={active ? 'active' : ''}
      onClick={() => setActive(false)}
    >
      <ModalBox
        className={active ? 'active' : ''}
        onClick={e => e.stopPropagation()}
      >
        <PetBox>
          <ImgBox>
            <img src={pet.petImg} alt={pet.petName} />
            <CategoryBox>
              <p>
                {pet.category}
                {active && pet.petId}
              </p>
            </CategoryBox>
          </ImgBox>
          <InfoBox>
            <PetTitle>{pet.petTitle}</PetTitle>
            <PetInfo>
              <PetInfoItem>
                <PetInfoItemTitle>Name:</PetInfoItemTitle>
                {pet.petName}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>Birthday:</PetInfoItemTitle>
                {pet.petBirthdayDate}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>Breed:</PetInfoItemTitle>
                {pet.petBreed}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>Place:</PetInfoItemTitle>
                {pet.petLocation}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>The sex:</PetInfoItemTitle>
                {pet.petSex}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>Email:</PetInfoItemTitle>
                <a className="userContact" href={`mailto:${pet.userEmail}`}>
                  {pet.userEmail}
                </a>
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>Phone:</PetInfoItemTitle>
                <a className="userContact" href={`tel:${pet.userPhone}`}>
                  {pet.userPhone}
                </a>
              </PetInfoItem>
              {pet.price ? (
                <PetInfoItem>
                  <PetInfoItemTitle>Price:</PetInfoItemTitle>
                  {pet.price}
                </PetInfoItem>
              ) : (
                ''
              )}
            </PetInfo>
          </InfoBox>
          <PetComments>
            <span>Comments: </span>
            {pet.petComments}
          </PetComments>
          <PhoneLink>
            <a href={`tel:${pet.userPhone}`}>Contact</a>
          </PhoneLink>

          {((isAuth && !pet.isFavorite) || !isAuth) && (
            <AddToFavoriteBtn onClick={addToFavorite(pet.petId)}>
              Add to <AiFillHeart className="addIcon" />
            </AddToFavoriteBtn>
          )}
          {isAuth && pet.isFavorite && (
            <AddToFavoriteBtn onClick={removeFromFavorite(pet.petId)}>
              Remove from <AiFillHeart className="addIcon" />
            </AddToFavoriteBtn>
          )}
        </PetBox>

        <CloseBtn onClick={() => setActive(false)}>
          <GrClose className="closeIcon" />
        </CloseBtn>
      </ModalBox>
    </BackDrop>
  ) : (
    ''
  );
};
ModalNotice.propTypes = {
  //   pet: PropTypes.shape({
  //     petId: PropTypes.Number.isRequired,
  //   categoryName: PropTypes.string,
  //     petImg: PropTypes.string.isRequired,
  //     petTitle: PropTypes.string.isRequired,
  //     petName: PropTypes.string.isRequired,
  //     petBirthdayDate: PropTypes.string.isRequired,
  //     petBreed: PropTypes.string.isRequired,
  //     petLocation: PropTypes.string.isRequired,
  //     petSex: PropTypes.string.isRequired,
  //     userEmail: PropTypes.string.isRequired,
  //     userPhone: PropTypes.string.isRequired,
  //     petComments: PropTypes.string.isRequired,
  //   }).isRequired,

  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
