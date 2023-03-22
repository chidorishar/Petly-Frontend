import {
  Wrapper,
  Button,
  CommonWrapper,
  Icon,
  AddPetBtn,
  Span,
} from './NoticesNavigation.styled';

export const NoticesNavigation = () => {
  const nameCategory = {
    sell: 'sell',
    lost: 'lost/found',
    hands: 'in good hands',
  };
  return (
    <CommonWrapper>
      <Wrapper>
        <Button>{nameCategory.sell}</Button>
        <Button>{nameCategory.lost}</Button>
        <Button>{nameCategory.hands}</Button>
      </Wrapper>
      <Wrapper>
        <Span>Add pet</Span>
        <AddPetBtn>
          <Icon />
        </AddPetBtn>
      </Wrapper>
    </CommonWrapper>
  );
};
