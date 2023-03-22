import PropTypes from 'prop-types';
import { NoticeCategoriesItem } from './NoticeCategoriesItem';
import { Container, CardWrapper } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ notices }) => {
  return (
    <Container>
      {notices.map(notice => (
        <CardWrapper key={notice.id}>
          <NoticeCategoriesItem
            petImg={notice.petImg}
            title={notice.title}
            breed={notice.breed}
            place={notice.place}
            age={notice.age}
            price={notice.price}
          />
        </CardWrapper>
      ))}
    </Container>
  );
};

NoticesCategoriesList.propTypes = {
  notices: PropTypes.array,
};
