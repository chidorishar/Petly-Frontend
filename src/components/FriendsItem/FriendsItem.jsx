import PropTypes from 'prop-types';
import { useState } from 'react';

import EllipsisText from 'react-ellipsis-text';
import { useTranslation } from 'react-i18next';

import {
  SponsorLink,
  FriendCard,
  Time,
  Text,
  ContactLink,
  Img,
  SponsorItem,
  TextWrapper,
  List,
} from './FriendsItem.styled';
import { TimeTable } from './TimeTable';
import defaultFriendImage from '../../images/defaultmageForOurFriends.jpg';

const maxSymbolsInLine = 25;
const noDataPlaceholder = String('– ').repeat(10);

export const FriendsItem = ({
  title,
  siteUrl,
  mapUrl,
  imageUrl = defaultFriendImage,
  adress,
  workDays,
  phone,
  email,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const week = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newWorkDays =
    workDays &&
    workDays.map((day, index) => {
      return { day: week[index], ...day };
    });

  const { t } = useTranslation();

  return (
    <SponsorItem>
      <SponsorLink href={siteUrl} target="_blank">
        <EllipsisText text={title} length={maxSymbolsInLine} />
      </SponsorLink>
      <FriendCard>
        <Img src={imageUrl ?? defaultFriendImage} alt={title} />
        <List>
          <TextWrapper
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsVisible(true);
              }, 1000);
            }}
          >
            {workDays === null || workDays === undefined ? (
              <>
                <Text> {t('friends.time')}</Text>
                <Text>{noDataPlaceholder}</Text>
              </>
            ) : (
              <>
                {' '}
                {workDays[0]?.isOpen ? (
                  <>
                    <Text>{t('friends.time')}</Text>
                    <Time>
                      {workDays[0].from}-{workDays[0].to}
                    </Time>
                  </>
                ) : (
                  <>
                    <Text>{t('friends.time')}</Text>
                    <Time>{t('friends.closed')}</Time>
                  </>
                )}
                {isVisible || <TimeTable shedule={newWorkDays} />}
              </>
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>{t('friends.address')}</Text>
            {mapUrl ? (
              <ContactLink href={mapUrl} target="_blank">
                <EllipsisText text={adress} length={maxSymbolsInLine} />
              </ContactLink>
            ) : (
              <Text>{noDataPlaceholder}</Text>
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>{t('friends.email')}</Text>
            {email ? (
              <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
            ) : (
              <Text>{noDataPlaceholder}</Text>
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>{t('friends.phone')}</Text>
            {phone ? (
              <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
            ) : (
              <Text>{noDataPlaceholder}</Text>
            )}
          </TextWrapper>
        </List>
      </FriendCard>
    </SponsorItem>
  );
};

FriendsItem.propTypes = {
  title: PropTypes.string,
  siteUrl: PropTypes.string,
  mapUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  adress: PropTypes.string,
  workDays: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      from: PropTypes.string,
      to: PropTypes.string,
      isOpen: PropTypes.bool,
    })
  ),
  phone: PropTypes.string,
  email: PropTypes.string,
};
