import PropTypes from 'prop-types';
import { NoticeCategoriesItem } from './NoticeCategoriesItem';
import { Container, CardWrapper } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ notices, onDeleteNotice }) => {
  return (
    <Container>
      {notices.map(notice => (
        <CardWrapper key={notice._id}>
          <NoticeCategoriesItem
            id={notice._id}
            image={notice.image}
            title={notice.title}
            breed={notice.breed}
            location={notice.location}
            birthDate={notice.birthDate}
            price={notice.price}
            category={notice.category}
            isOwner={notice?.isOwner ?? false}
            isFavorite={notice?.isFavorite ?? false}
            onDeleteNotice={onDeleteNotice}
          />
        </CardWrapper>
      ))}
    </Container>
  );
};

NoticesCategoriesList.propTypes = {
  notices: PropTypes.array,
  onDeleteNotice: PropTypes.func,
};
