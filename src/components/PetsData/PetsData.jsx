import {
  PetsContainer,
  PetsTitle,
  PetsItem,
  PetsImageWraper,
  PetsImg,
  PetsInfoList,
  PetsSpan,
  PetsInfoItem,
  PetsTitleWraper,
  PetsDeleteButton,
  PetsDeleteIcon,
  PetsInfoWrapper,
} from './PetsData.styled';

import sprite from 'images/sprite.svg';

export const PetsData = () => {
  return (
    <PetsContainer>
      <PetsTitleWraper>
        <PetsTitle>My pets:</PetsTitle>
        <button
          type="button"
          style={{
            display: 'inline-block',
            height: '20px',
            borderRadius: 4,
            backgroundColor: '#F59256',
            color: 'black',
          }}
        >
          Add pet
        </button>
      </PetsTitleWraper>
      <ul>
        <PetsItem>
          <PetsDeleteButton type="button">
            <PetsDeleteIcon>
              <use href={sprite + '#trash-can'} />
            </PetsDeleteIcon>
          </PetsDeleteButton>
          <PetsImageWraper>
            <PetsImg
              src="https://images.prom.ua/901671004_w640_h640_lev-iz-dereva.jpg"
              alt="Pet Photo"
            />
          </PetsImageWraper>
          <PetsInfoWrapper>
            <PetsInfoList>
              <PetsInfoItem>
                <PetsSpan>Name: </PetsSpan>Jack
              </PetsInfoItem>
              <PetsInfoItem>
                <PetsSpan>Date of birth: </PetsSpan>22.04.2018
              </PetsInfoItem>
              <PetsInfoItem>
                <PetsSpan>Breed: </PetsSpan>Persian cat
              </PetsInfoItem>
              <PetsInfoItem>
                <PetsSpan>Comments: </PetsSpan>Lorem ipsum dolor sit amet,
                consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum
                dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                consectetur
              </PetsInfoItem>
            </PetsInfoList>
          </PetsInfoWrapper>
        </PetsItem>
        <PetsItem>
          <PetsDeleteButton type="button">
            <PetsDeleteIcon>
              <use href={sprite + '#trash-can'} />
            </PetsDeleteIcon>
          </PetsDeleteButton>
          <PetsImageWraper>
            <PetsImg
              src="https://images.prom.ua/901671004_w640_h640_lev-iz-dereva.jpg"
              alt="Pet Photo"
              width="161"
            />
          </PetsImageWraper>
          <PetsInfoWrapper>
            <PetsInfoList>
              <PetsInfoItem>
                <PetsSpan>Name: </PetsSpan>Jack
              </PetsInfoItem>
              <PetsInfoItem>
                <PetsSpan>Date of birth: </PetsSpan>22.04.2018
              </PetsInfoItem>
              <PetsInfoItem>
                <PetsSpan>Breed: </PetsSpan>Basenji
              </PetsInfoItem>
              <PetsInfoItem>
                <PetsSpan>Comments: </PetsSpan>Lorem ipsum dolor sit amet,
                consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum
                dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum
                dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                consectetur ipsum dolor sit amet, rem ipsum dolor sit amet,
                ipsum sit,
              </PetsInfoItem>
            </PetsInfoList>
          </PetsInfoWrapper>
        </PetsItem>
      </ul>
    </PetsContainer>
  );
};
