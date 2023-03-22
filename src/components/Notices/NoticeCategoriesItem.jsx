import PropTypes from 'prop-types';
import { Box } from 'components/common/shared.styled';
import {
  // Container,
  // ImgWrapper,
  PetImg,
  PetInfo,
  CardWrapper,
  CardTitle,
  // CardList,
  Button,
  CategoryTitle,
  AddToFavBtn,
  FavoriteIcon,
} from './NoticeCategoriesItem.styled';

export const NoticeCategoriesItem = ({
  id,
  petImg,
  title,
  breed,
  place,
  age,
  price,
}) => {
  return (
    <Box
      key={id}
      position="relative"
      backgroundColor="#ffffff"
      border-radius="0px 0px 40px 40px"
      // borderBottomLeftRadius="20px"
      // borderBottomRightRadius="20px"
      boxShadow="7px 4px 14px rgba(49, 21, 4, 0.07)"
    >
      <PetImg src={petImg} alt={breed} />
      <Box
        display="flex"
        position="absolute"
        width="100%"
        justifyContent="space-between"
        top="12px"
        alignItems="center"
      >
        <CategoryTitle>sell</CategoryTitle>
        <AddToFavBtn>
          <FavoriteIcon />
        </AddToFavBtn>
      </Box>
      <CardWrapper>
        <CardTitle>{title}</CardTitle>
        <Box display="flex" marginTop="20px">
          <Box marginRight="40px">
            <PetInfo>
              <li>Breed:</li>
              <li>Place:</li>
              <li>Age:</li>
              <li>Price:</li>
            </PetInfo>
          </Box>
          <PetInfo>
            <li>{breed}</li>
            <li>{place}</li>
            <li>{age}</li>
            <li>{price}</li>
          </PetInfo>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button>Learn more</Button>
        </Box>
      </CardWrapper>
    </Box>
  );
};

NoticeCategoriesItem.propTypes = {
  id: PropTypes.number.isRequired,
  petImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
