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
    favorite_ads: 'favorite ads',
    my_ads: 'my ads',
  };
  const isLoggedIn = true;
  // const activeCategory = 'sell';
  return (
    <CommonWrapper>
      <Wrapper>
        <Button type="button">{nameCategory.lost}</Button>
        <Button type="button">{nameCategory.hands}</Button>
        <Button type="button">{nameCategory.sell}</Button>
        {isLoggedIn && (
          <>
            <Button type="button">{nameCategory.favorite_ads}</Button>
            <Button type="button">{nameCategory.my_ads}</Button>
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
