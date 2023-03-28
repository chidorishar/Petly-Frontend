import PropTypes from 'prop-types';
import { differenceInCalendarYears } from 'date-fns';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { addToFavorites, deleteFromFavorites } from './api';
import { useAuth } from 'redux/hooks/getAuth';

import { RiDeleteBinFill } from 'react-icons/ri';
import { Box } from 'components/common/';
import {
  CardContainer,
  ImgWrapper,
  Wrapper,
  PetImg,
  PetInfo,
  CardWrapper,
  CardTitle,
  BottomWrapper,
  Button,
  DeleteButton,
  CategoryTitle,
  AddToFavBtn,
  FavoriteIcon,
  Span,
} from './NoticeCategoriesItem.styled';
import i18n from 'i18next';

const nameCategory = [
  { type: 'sell', text: i18n.t('notices.sell') },
  { type: 'lost-found', text: i18n.t('notices.lost') },
  { type: 'for-free', text: i18n.t('notices.free') },
  { type: 'favorites', text: i18n.t('notices.fav') },
  { type: 'own', text: i18n.t('notices.own') },
];

export const NoticeCategoriesItem = ({
  id,
  image,
  title,
  breed,
  location,
  birthDate,
  price,
  category,
  isOwner,
  isFavorite,
  onDeleteNotice,
  onUpdateNoticeStatus,
  onLearnMoreClick,
}) => {
  const { isUserAuthorized, isUserRefreshing } = useAuth();

  const getLabel = category => {
    const el = nameCategory.find(item => item.type === category);
    return el.text;
  };

  const handleAddToFavoriteClick = async (id, isFavorite) => {
    if (isUserAuthorized && !isUserRefreshing) {
      isFavorite ? await deleteFromFavorites(id) : await addToFavorites(id);
      onUpdateNoticeStatus();
    } else toast.error('You should register to get access to favorites');
  };

  const calcFullYearsOld = birthDate => {
    return differenceInCalendarYears(new Date(), new Date(birthDate));
  };

  const { t } = useTranslation();
  return (
    <>
      {' '}
      <CardContainer>
        <ImgWrapper>
          <PetImg src={image} alt={breed} />
          <Wrapper>
            <CategoryTitle>{getLabel(category)}</CategoryTitle>
            <AddToFavBtn
              onClick={() => handleAddToFavoriteClick(id, isFavorite)}
            >
              <FavoriteIcon $favorite={isFavorite} />
            </AddToFavBtn>
          </Wrapper>
        </ImgWrapper>
        <CardWrapper isOwner={isOwner}>
          <CardTitle>{title}</CardTitle>
          <Box display="flex">
            <Box marginRight="40px">
              <PetInfo>
                <li> {t('notices.breed')}</li>
                <li>{t('notices.place')}</li>
                <li>{t('notices.age')}</li>
                {category === 'sell' && <li>{t('notices.price')}</li>}
              </PetInfo>
            </Box>
            <PetInfo>
              <li>{breed}</li>
              <li>{location}</li>
              <li>
                {calcFullYearsOld(birthDate)} {t('notices.year')}
              </li>
              {category === 'sell' && <li>{price}</li>}
            </PetInfo>
          </Box>
          <BottomWrapper>
            <Button onClick={() => onLearnMoreClick(id)}>
              {t('notices.more')}
            </Button>
            {isOwner && (
              <DeleteButton onClick={() => onDeleteNotice(id)}>
                <Span>{t('notices.del')}</Span>
                <RiDeleteBinFill />
              </DeleteButton>
            )}
          </BottomWrapper>
        </CardWrapper>
      </CardContainer>
    </>
  );
};

NoticeCategoriesItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  isOwner: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onDeleteNotice: PropTypes.func,
  onUpdateNoticeStatus: PropTypes.func.isRequired,
  onLearnMoreClick: PropTypes.func.isRequired,
};
