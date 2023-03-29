import PropTypes from 'prop-types';
import { FriendsItem } from 'components/FriendsItem/FriendsItem';
import { List, Title } from './FriendsList.styled';
import { useTranslation } from 'react-i18next';

const FriendsList = ({ friends }) => {
  const { t } = useTranslation();
  return (
    <>
      <Title>{t('friends.friends')}</Title>
      <List>
        {friends.map(
          ({
            title,
            url,
            addressUrl,
            imageUrl,
            address,
            workDays,
            phone,
            email,
          }) => (
            <FriendsItem
              key={title}
              title={title}
              siteUrl={url}
              mapUrl={addressUrl}
              imageUrl={imageUrl}
              adress={address}
              workDays={workDays}
              phone={phone}
              email={email}
            />
          )
        )}
      </List>
    </>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      addressUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      address: PropTypes.string,
      workDays: PropTypes.array,
      phone: PropTypes.string,
      email: PropTypes.string,
    })
  ).isRequired,
};

export default FriendsList;
