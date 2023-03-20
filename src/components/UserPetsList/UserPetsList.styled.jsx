import styled from 'styled-components';
import { Box } from 'components/common/shared.styled';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  max-width: 280px;
  margin: auto;
  gap: 20px;
  @media screen and (min-width: 768px) {
    max-width: 704px;
    margin-top: 24px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 821px;
  }
`;
export const ListItem = styled(Box)`
  background-color: #8ba76b;
  border-radius: ${({ theme: { radii } }) => radii.secondaryBorderRadius};
  padding: 16px 20px 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.11);

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 20px;
    border-radius: ${({ theme: { radii } }) => radii.mainBorderRadius};
  }
`;
export const NameBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PetImg = styled.img`
  max-width: 100%;
  border-radius: ${({ theme: { radii } }) => radii.secondaryBorderRadius};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    display: block;
    margin-right: 32px;
    margin-bottom: 0;
    max-width: 161px;
  }
`;
export const PetInfo = styled.ul`
  list-style: none;
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: ${({ theme: { colors } }) => colors.dark};
  li {
    :not(:last-child) {
      margin-bottom: 12px;
    }
    font-family: ${({ theme: { fonts } }) => fonts.mainFamily};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.text};
    line-height: ${({ theme: { lineHeights } }) => lineHeights.body};
    letter-spacing: 0.04em;
    span {
      font-weight: ${({ theme: { fontWeights } }) => fontWeights.heading};
    }
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    position: relative;
    li {
      font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
    }
  }
`;
export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  padding: 0;

  color: ${({ theme: { colors } }) => colors.inputText};
  background-color: transparent;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.nl};
  &:focus,
  &:hover {
    outline: none;
    background-color: transparent;
    color: ${({ theme: { colors } }) => colors.hoverBtn};
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 44px;
    height: 44px;
    font-size: 24px;
    right: 0;
    top: 0;
    border-radius: ${({ theme: { radii } }) => radii.round};
    background-color: ${({ theme: { colors } }) => colors.mainBackground};
    align-items: center;
    &:focus,
    &:hover {
      background-color: ${({ theme: { colors } }) => colors.mainBackground};
      color: ${({ theme: { colors } }) => colors.hoverBtn};
    }
  }
`;
