import PropTypes from 'prop-types';
import { Box } from 'components/common/';
import { RiDeleteBinFill } from 'react-icons/ri';
import { differenceInCalendarYears } from 'date-fns';
import { addToFavorites } from './api';
import { useAuth } from 'redux/hooks/getAuth';
import { toast } from 'react-toastify';

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
import { useState } from 'react';

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
}) => {
  const { isUserAuthorized, isUserRefreshing } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getLabel = category => {
    const el = nameCategory.find(item => item.type === category);
    return el.text;
  };

  const handleClick = async id => {
    if (isUserAuthorized && !isUserRefreshing) await addToFavorites(id);
    else toast.error('You should register to get access to favotites');
  };

  const calcFullYearsOld = birthDate => {
    return differenceInCalendarYears(new Date(), new Date(birthDate));
  };

  return (
    <CardContainer onClick={() => setIsModalOpen(true)}>
      <ImgWrapper>
        <PetImg src={image} alt={breed} />
        <Wrapper>
          <CategoryTitle>{getLabel(category)}</CategoryTitle>
          <AddToFavBtn onClick={() => handleClick(id)}>
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
          <Button>Learn more</Button>
          {isOwner && (
            <DeleteButton onClick={() => onDeleteNotice(id)}>
              <Span>Delete</Span>
              <RiDeleteBinFill />
            </DeleteButton>
          )}
        </BottomWrapper>
      </CardWrapper>
      {isModalOpen && <div>Modal window</div>}
    </CardContainer>
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
};
