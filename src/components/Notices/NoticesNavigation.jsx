import { useAuth } from 'redux/hooks/getAuth';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Button,
  CommonWrapper,
  Icon,
  AddPetBtn,
  Span,
} from './NoticesNavigation.styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export const NoticesNavigation = ({ onCategoryClick, onAddNoticeClick }) => {
  const { isUserAuthorized, isUserRefreshing } = useAuth();
  const [selectedButton, setSelectedButton] = useState('sell');
  const nameCategoryUnAuth = [
    { type: 'sell', text: i18n.t('notices.sell') },
    { type: 'lostFound', text: i18n.t('notices.lost') },
    { type: 'forFree', text: i18n.t('notices.free') },
  ];

  const nameCategoryAuth = [
    { type: 'favorites', text: i18n.t('notices.fav') },
    { type: 'own', text: i18n.t('notices.own') },
  ];

  const handleClick = buttonType => {
    setSelectedButton(buttonType);
    onCategoryClick(buttonType);
  };
  const { t } = useTranslation();

  return (
    <CommonWrapper>
      <Wrapper>
        {nameCategoryUnAuth.map((item, index) => (
          <Button
            key={index}
            selected={selectedButton === item.type}
            type="button"
            onClick={() => {
              handleClick(item.type);
            }}
          >
            {item.text}
          </Button>
        ))}
        {isUserAuthorized && !isUserRefreshing && (
          <>
            {nameCategoryAuth.map((item, index) => (
              <Button
                key={index}
                type="button"
                selected={selectedButton === item.type}
                onClick={() => handleClick(item.type)}
              >
                {item.text}
              </Button>
            ))}
          </>
        )}
      </Wrapper>
      <Wrapper>
        <AddPetBtn onClick={onAddNoticeClick}>
          <Span>{t('notices.add')}</Span>
          <Icon />
        </AddPetBtn>
      </Wrapper>
    </CommonWrapper>
  );
};

NoticesNavigation.propTypes = {
  onCategoryClick: PropTypes.func,
  onAddNoticeClick: PropTypes.func,
};
