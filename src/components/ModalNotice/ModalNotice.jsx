import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import { dateConverter } from 'utils';
import { BACKEND_BASE_URL } from 'utils/appKeys';
import { useAuth } from 'redux/hooks/getAuth';

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

export const ModalNotice = ({
  noticeData,
  setIsModalShown,
  onUpdateNoticeStatus,
}) => {
  const { isUserAuthorized, isUserRefreshing } = useAuth();

  useEffect(() => {
    const handleKeyClose = e => {
      if (e.key === 'Escape') {
        setIsModalShown(false);
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
    sex,
    price = '',
    image,
    comments,
    owner: { name, phone, email },
    isFavorite,
  } = noticeData;

  const addToFavorite = async id => {
    try {
      if (!isUserAuthorized) {
        showToast;
        return;
      }
      await axios.patch(
        `http://${BACKEND_BASE_URL}/api/notices/favorites/${id}`
      );
      onUpdateNoticeStatus(id);
    } catch (error) {
      console.log(`Error update favorite list ${error}`);
    }
  };
  const removeFromFavorite = async id => {
    try {
      await axios.delete(
        `http://${BACKEND_BASE_URL}/api/notices/favorites/${id}`
      );
      onUpdateNoticeStatus(id);
    } catch (error) {
      console.log(`Error update favorite list ${error}`);
    }
  };

  return (
    <BackDrop onClick={() => setIsModalShown(false)}>
      <ModalBox onClick={e => e.stopPropagation()}>
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
                {dateConverter(birthDate, 'dd.MM.yyyy')}
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
              {category === 'sell' ? (
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

          {((isUserAuthorized && !isUserRefreshing && !isFavorite) ||
            !isUserAuthorized) && (
            <AddToFavoriteBtn onClick={() => addToFavorite(_id)}>
              Add to <AiFillHeart className="addIcon" />
            </AddToFavoriteBtn>
          )}
          {isUserAuthorized && !isUserRefreshing && isFavorite && (
            <AddToFavoriteBtn onClick={() => removeFromFavorite(_id)}>
              Remove from <AiFillHeart className="addIcon" />
            </AddToFavoriteBtn>
          )}
        </PetBox>

        <CloseBtn onClick={() => setIsModalShown(false)}>
          <GrClose className="closeIcon" />
        </CloseBtn>
      </ModalBox>
      <ToastContainer />
    </BackDrop>
  );
};
ModalNotice.propTypes = {
  noticeData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    category: PropTypes.string,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    comments: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool,
  }).isRequired,

  onUpdateNoticeStatus: PropTypes.func.isRequired,
  setIsModalShown: PropTypes.func.isRequired,
};
