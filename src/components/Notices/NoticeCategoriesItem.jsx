import PropTypes from 'prop-types';
import { differenceInCalendarYears } from 'date-fns';
import { toast } from 'react-toastify';

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

const nameCategory = [
  { type: 'sell', text: 'sell' },
  { type: 'lost-found', text: 'lost found' },
  { type: 'for-free', text: 'in good hands' },
  { type: 'favorites', text: 'favorite ads' },
  { type: 'own', text: 'my ads' },
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

  return (
    <>
      {' '}
      <CardContainer>
        <ImgWrapper>
          <PetImg src={image} alt={breed} />
          <Wrapper>
            <CategoryTitle>{getLabel(category)}</CategoryTitle>
            <AddToFavBtn
              $favorite={isFavorite}
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
                <li>Breed:</li>
                <li>Place:</li>
                <li>Age:</li>
                {category === 'sell' && <li>Price:</li>}
              </PetInfo>
            </Box>
            <PetInfo>
              <li>{breed}</li>
              <li>{location}</li>
              <li>{calcFullYearsOld(birthDate)} year</li>
              {category === 'sell' && <li>{price}</li>}
            </PetInfo>
          </Box>
          <BottomWrapper>
            <Button onClick={() => onLearnMoreClick(id)}>Learn more</Button>
            {isOwner && (
              <DeleteButton onClick={() => onDeleteNotice(id)}>
                <Span>Delete</Span>
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
