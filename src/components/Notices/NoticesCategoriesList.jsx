import PropTypes from 'prop-types';
import { NoticeCategoriesItem } from './NoticeCategoriesItem';
import { Container, CardWrapper } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ notices }) => {
  return (
    <Container>
      {notices.map(notice => (
        <CardWrapper key={notice.id}>
          <NoticeCategoriesItem
            image={notice.image}
            title={notice.title}
            breed={notice.breed}
            location={notice.location}
            birthDate={notice.birthDate}
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
