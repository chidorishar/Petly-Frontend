import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import axios from 'axios';
import { BACKEND_BASE_URL } from 'utils/appKeys';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export const ModalNotice = ({ pet, active, setActive }) => {
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
  const showToast = () => {
    toast(' Please login to add to favorites! ');
  };
  const {
    _id,
    title,
    breed,
    location,
    birthDate,
    category,
    name,
    sex,
    price = '',
    image,
    comments,
    phone,
    email,
    isFavorite,
  } = pet;

  const addToFavorite = async id => {
    try {
      if (!isAuth) {
        showToast;
        return;
      }
      await axios.patch(`http://${BACKEND_BASE_URL}/api/notices/favorites/`, {
        params: {
          id: id,
        },
      });
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
            <img src={image} alt={name} />
            <CategoryBox>
              <p>
                {category}
                {/* {active && pet.petId} */}
              </p>
            </CategoryBox>
          </ImgBox>
          <InfoBox>
            <PetTitle>{title}</PetTitle>
            <PetInfo>
              <PetInfoItem>
                <PetInfoItemTitle>Name:</PetInfoItemTitle>
                {name}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>Birthday:</PetInfoItemTitle>
                {birthDate}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>Breed:</PetInfoItemTitle>
                {breed}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>Place:</PetInfoItemTitle>
                {location}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>The sex:</PetInfoItemTitle>
                {sex}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>Email:</PetInfoItemTitle>
                <a className="userContact" href={`mailto:${email}`}>
                  {email}
                </a>
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>Phone:</PetInfoItemTitle>
                <a className="userContact" href={`tel:${phone}`}>
                  {phone}
                </a>
              </PetInfoItem>
              {price ? (
                <PetInfoItem>
                  <PetInfoItemTitle>Price:</PetInfoItemTitle>
                  {price}
                </PetInfoItem>
              ) : (
                ''
              )}
            </PetInfo>
          </InfoBox>
          <PetComments>
            <span>Comments: </span>
            {comments}
          </PetComments>
          <PhoneLink>
            <a href={`tel:${phone}`}>Contact</a>
          </PhoneLink>

          {((isAuth && !isFavorite) || !isAuth) && (
            <AddToFavoriteBtn onClick={addToFavorite(_id)}>
              Add to <AiFillHeart className="addIcon" />
            </AddToFavoriteBtn>
          )}
          {isAuth && isFavorite && (
            <AddToFavoriteBtn onClick={removeFromFavorite(_id)}>
              Remove from <AiFillHeart className="addIcon" />
            </AddToFavoriteBtn>
          )}
        </PetBox>

        <CloseBtn onClick={() => setActive(false)}>
          <GrClose className="closeIcon" />
        </CloseBtn>
      </ModalBox>
      <ToastContainer />
    </BackDrop>
  ) : (
    ''
  );
};
ModalNotice.propTypes = {
  pet: PropTypes.shape({
    _id: PropTypes.Number.isRequired,
    category: PropTypes.string,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,

  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
