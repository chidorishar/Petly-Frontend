import PropTypes from 'prop-types';
import { Box } from 'components/common/';
import { RiDeleteBinFill } from 'react-icons/ri';
import { differenceInCalendarYears } from 'date-fns';
import addToFavorites from './addToFavotites';

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

export const NoticeCategoriesItem = ({
  id,
  image,
  title,
  breed,
  location,
  birthDate,
  price,
}) => {
  let isActive = true;

  const handleClick = async id => {
    await addToFavorites(id);
  };

  const calcFullYearsOld = birthDate => {
    return differenceInCalendarYears(new Date(), new Date(birthDate));
  };

  return (
    <CardContainer>
      <ImgWrapper>
        <PetImg src={image} alt={breed} />
        <Wrapper>
          <CategoryTitle>sell</CategoryTitle>
          <AddToFavBtn onClick={() => handleClick(id)}>
            <FavoriteIcon />
          </AddToFavBtn>
        </Wrapper>
      </ImgWrapper>
      <CardWrapper>
        <CardTitle>{title}</CardTitle>
        <Box display="flex" marginTop="20px">
          <Box marginRight="40px">
            <PetInfo>
              <li>Breed:</li>
              <li>Place:</li>
              <li>Age:</li>
              {!isActive && <li>Price:</li>}
            </PetInfo>
          </Box>
          <PetInfo>
            <li>{breed}</li>
            <li>{location}</li>
            <li>{calcFullYearsOld(birthDate)}</li>
            {!isActive && <li>{price}</li>}
          </PetInfo>
        </Box>
        <BottomWrapper>
          <Button>Learn more</Button>
          {isActive && (
            <DeleteButton>
              <Span>Delete</Span>
              <RiDeleteBinFill />
            </DeleteButton>
          )}
        </BottomWrapper>
      </CardWrapper>
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
};
