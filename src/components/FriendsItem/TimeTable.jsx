import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { TimeList, TimeItem, Text } from './FriendsItem.styled';
import { useTranslation } from 'react-i18next';

export const TimeTable = ({ shedule }) => {
  const { t } = useTranslation();
  return (
    <TimeList>
      {shedule.map(item => (
        <TimeItem key={nanoid()}>
          {item?.isOpen ? (
            <Text>
              <span>{item.day}</span> {item.from}-{item.to}
            </Text>
          ) : (
            <Text>
              <span>{item.day}</span> {t('friends.closed')}
            </Text>
          )}
        </TimeItem>
      ))}
    </TimeList>
  );
};

TimeTable.propTypes = {
  shedule: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      from: PropTypes.string,
      to: PropTypes.string,
      isOpen: PropTypes.bool,
    }).isRequired
  ).isRequired,
};
