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

export const NoticesNavigation = ({ onCategoryClick }) => {
  const { isUserAuthorized, isUserRefreshing } = useAuth();
  const [selectedButton, setSelectedButton] = useState('sell');

  const nameCategoryUnAuth = [
    { type: 'sell', text: 'sell' },
    { type: 'lostFound', text: 'lost found' },
    { type: 'forFree', text: 'in good hands' },
  ];

  const nameCategoryAuth = [
    { type: 'favorites', text: 'favorite ads' },
    { type: 'own', text: 'my ads' },
  ];

  const handleClick = buttonType => {
    setSelectedButton(buttonType);
    onCategoryClick(buttonType);
  };

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
        {/* <Button
          type="button"
          onClick={() => {
            onCategoryClick(nameCategory[0].type);
          }}
        >
          {nameCategory[0].text}
        </Button>
        <Button
          type="button"
          onClick={() => {
            onCategoryClick(nameCategory[1].type);
          }}
        >
          {nameCategory[1].text}
        </Button>
        <Button
          type="button"
          onClick={() => {
            onCategoryClick(nameCategory[2].type);
          }}
        >
          {nameCategory[2].text}
        </Button> */}
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
            {/* <Button
              type="button"
              onClick={() => {
                onCategoryClick(nameCategoryAuth[0].type);
              }}
            >
              {nameCategoryAuth[0].text}
            </Button>
            <Button
              type="button"
              onClick={() => {
                onCategoryClick(nameCategoryAuth[1].myAds);
              }}
            >
              {nameCategoryAuth[1].myAds}
            </Button> */}
          </>
        )}
      </Wrapper>
      <Wrapper>
        <AddPetBtn>
          <Icon />
          <Span>Add pet</Span>
        </AddPetBtn>
      </Wrapper>
    </CommonWrapper>
  );
};

NoticesNavigation.propTypes = {
  onCategoryClick: PropTypes.func,
};
