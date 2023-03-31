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
import { useTranslation } from 'react-i18next';

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
  const showNotAuthNotification = () => {
    toast.error(t('notification.notRegistered'));
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
    if (!isUserAuthorized) {
      showNotAuthNotification();
      return;
    }

    try {
      await axios.patch(`${BACKEND_BASE_URL}/api/notices/favorites/${id}`);
      onUpdateNoticeStatus(id);
    } catch (error) {
      console.log(`Error update favorite list ${error}`);
    }
  };

  const removeFromFavorite = async id => {
    if (!isUserAuthorized) {
      showNotAuthNotification();
      return;
    }

    try {
      await axios.delete(`${BACKEND_BASE_URL}/api/notices/favorites/${id}`);
      onUpdateNoticeStatus(id);
    } catch (error) {
      console.log(`Error update favorite list ${error}`);
    }
  };

  const { t } = useTranslation();

  return (
    <BackDrop onClick={() => setIsModalShown(false)}>
      <ModalBox onClick={e => e.stopPropagation()}>
        <PetBox>
          <ImgBox>
            <img src={image} alt={name} />
            <CategoryBox>
              <p>{category}</p>
            </CategoryBox>
          </ImgBox>
          <InfoBox>
            <PetTitle>{title}</PetTitle>
            <PetInfo>
              <PetInfoItem>
                <PetInfoItemTitle>{t('notices.name')}</PetInfoItemTitle>
                {name}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>{t('notices.birthday')}</PetInfoItemTitle>
                {dateConverter(birthDate, 'dd.MM.yyyy')}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>{t('notices.breed')}</PetInfoItemTitle>
                {breed}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>{t('notices.place')}</PetInfoItemTitle>
                {location}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>{t('notices.sex')}</PetInfoItemTitle>
                {sex}
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>{t('friends.email')}</PetInfoItemTitle>
                <a className="userContact" href={`mailto:${email}`}>
                  {email}
                </a>
              </PetInfoItem>
              <PetInfoItem>
                <PetInfoItemTitle>{t('notices.phone')}</PetInfoItemTitle>
                <a className="userContact" href={`tel:${phone}`}>
                  {phone}
                </a>
              </PetInfoItem>
              {category === 'sell' ? (
                <PetInfoItem>
                  <PetInfoItemTitle>{t('notices.price')}</PetInfoItemTitle>
                  {price}
                </PetInfoItem>
              ) : (
                ''
              )}
            </PetInfo>
          </InfoBox>
          <PetComments>
            <span>{t('notices.comm')} </span>
            {comments}
          </PetComments>
          <PhoneLink>
            <a href={`tel:${phone}`}>{t('notices.contact')}</a>
          </PhoneLink>

          {((isUserAuthorized && !isUserRefreshing && !isFavorite) ||
            !isUserAuthorized) && (
            <AddToFavoriteBtn onClick={() => addToFavorite(_id)}>
              {t('notices.addTo')} <AiFillHeart className="addIcon" />
            </AddToFavoriteBtn>
          )}
          {isUserAuthorized && !isUserRefreshing && isFavorite && (
            <AddToFavoriteBtn onClick={() => removeFromFavorite(_id)}>
              {t('notices.remove')} <AiFillHeart className="addIcon" />
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
